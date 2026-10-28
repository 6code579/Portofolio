import { useEffect, useRef, useState } from 'react';
import { gsap, hasFinePointer, prefersReducedMotion } from '../lib/motion';
import { useShell } from '../contexts/ShellContext';

const vertex = /* glsl */ `
  attribute vec2 position;
  attribute vec2 uv;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

// Brume lente teintée de la primaire, qui s'éclaire autour du curseur. Couleurs = variables du site.
const fragment = /* glsl */ `
  precision mediump float;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uAspect;

  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
               mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
  }
  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 4; i++) {
      v += a * noise(p);
      p *= 2.0;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = vUv;
    vec2 p = vec2(uv.x * uAspect, uv.y) * 1.7;
    float flow = fbm(p + vec2(uTime * 0.035, -uTime * 0.02) + fbm(p * 1.4 - uTime * 0.03));

    vec2 m = vec2(uMouse.x * uAspect, uMouse.y);
    float d = distance(vec2(uv.x * uAspect, uv.y), m);
    float glow = smoothstep(0.7, 0.0, d);

    vec3 bg = vec3(0.0745, 0.0275, 0.0275);
    vec3 teal = vec3(0.0, 0.475, 0.475);
    vec3 cream = vec3(1.0, 0.886, 0.686);

    float mist = flow * flow;
    vec3 col = bg;
    col += teal * mist * (0.28 + glow * 0.9);
    col += cream * glow * glow * 0.045;

    float vig = smoothstep(1.15, 0.25, distance(uv, vec2(0.5)));
    col = mix(bg, col, vig);
    gl_FragColor = vec4(col, 1.0);
  }
`;

/** Fond WebGL (une seule scène, pas de Three.js). Désactivé au tactile, en reduced-motion ou sans WebGL. */
export default function Shader({ className = '' }: { className?: string }) {
  const host = useRef<HTMLDivElement>(null);
  const [live, setLive] = useState(false);
  const { ready } = useShell();

  useEffect(() => {
    if (!ready || !host.current || prefersReducedMotion() || !hasFinePointer()) return;
    if ((navigator.hardwareConcurrency ?? 8) < 4) return;
    const el = host.current;
    let cancelled = false;
    let cleanup: (() => void) | undefined;

    // ogl est chargé à la demande, une fois le rideau levé et le navigateur au repos.
    const start = async () => {
    const { Renderer, Program, Mesh, Triangle } = await import('ogl');
    if (cancelled) return;
    let renderer: InstanceType<typeof Renderer>;
    try {
      renderer = new Renderer({ dpr: Math.min(window.devicePixelRatio, 1) * 0.6, alpha: false, antialias: false });
    } catch {
      return;
    }
    const gl = renderer.gl;
    if (!gl) return;
    const canvas = gl.canvas as HTMLCanvasElement;
    canvas.style.cssText = 'width:100%;height:100%;display:block';
    el.appendChild(canvas);

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: { uTime: { value: 0 }, uMouse: { value: [0.62, 0.45] }, uAspect: { value: 1 } },
    });
    const mesh = new Mesh(gl, { geometry: new Triangle(gl), program });

    const resize = () => {
      const w = el.clientWidth;
      const h = el.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h);
      program.uniforms.uAspect.value = w / h;
    };
    const ro = new ResizeObserver(resize);
    ro.observe(el);
    resize();

    const target = { x: 0.62, y: 0.45 };
    const current = { x: 0.62, y: 0.45 };
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      target.x = (e.clientX - r.left) / r.width;
      target.y = 1 - (e.clientY - r.top) / r.height;
    };
    window.addEventListener('pointermove', onMove, { passive: true });

    let visible = true;
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(el);

    const update = (time: number) => {
      if (!visible || document.hidden) return;
      current.x += (target.x - current.x) * 0.05;
      current.y += (target.y - current.y) * 0.05;
      program.uniforms.uTime.value = time;
      program.uniforms.uMouse.value = [current.x, current.y];
      renderer.render({ scene: mesh });
    };
    gsap.ticker.add(update);
    update(0);
    setLive(true);

    cleanup = () => {
      gsap.ticker.remove(update);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener('pointermove', onMove);
      canvas.remove();
      gl.getExtension('WEBGL_lose_context')?.loseContext();
      setLive(false);
    };
    };

    const hasIdle = typeof window.requestIdleCallback === 'function';
    const idle = hasIdle
      ? window.requestIdleCallback(() => void start(), { timeout: 1500 })
      : window.setTimeout(() => void start(), 400);

    return () => {
      cancelled = true;
      if (hasIdle) window.cancelIdleCallback(idle);
      else window.clearTimeout(idle);
      cleanup?.();
    };
  }, [ready]);

  return (
    <div aria-hidden className={`absolute inset-0 overflow-hidden ${className}`}>
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 55% at 70% 40%, rgb(0 121 121 / 0.28), transparent 70%), radial-gradient(40% 40% at 15% 85%, rgb(36 177 177 / 0.10), transparent 70%), var(--bg)',
        }}
      />
      <div ref={host} className={`absolute inset-0 transition-opacity duration-1000 ${live ? 'opacity-100' : 'opacity-0'}`} />
    </div>
  );
}
