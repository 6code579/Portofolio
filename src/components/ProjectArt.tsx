import type { ReactNode } from 'react';
import type { Project } from '../data/content';

/**
 * Illustrations des projets sans aperçu en direct : chaque scène évoque l'application
 * (maquettes d'écrans, pastilles flottantes) sur la grille sombre commune.
 */

const P = 'rgb(var(--primary-rgb))';
const PD = 'rgb(var(--primary-deep-rgb))';
const S = 'rgb(var(--secondary-rgb))';
const LINE = 'rgb(var(--secondary-rgb) / 0.16)';
const MUTED = 'rgb(255 255 255 / 0.5)';
const BAR = 'rgb(255 255 255 / 0.16)';
const PANEL = '#131313';
const PANEL_UP = '#1a1a1b';

type TextProps = { x: number; y: number; size?: number; fill?: string; weight?: number; anchor?: 'start' | 'middle' | 'end'; children: ReactNode };

function T({ x, y, size = 12, fill = S, weight = 500, anchor = 'start', children }: TextProps) {
  return (
    <text x={x} y={y} fontSize={size} fill={fill} fontWeight={weight} textAnchor={anchor}>
      {children}
    </text>
  );
}

/** Groupe qui flotte doucement ; `delay` décale les éléments entre eux. */
function Float({ delay = 0, children }: { delay?: number; children: ReactNode }) {
  return (
    <g className="art-float" style={{ animationDelay: `${delay}s` }}>
      {children}
    </g>
  );
}

function Chip({ x, y, w, label }: { x: number; y: number; w: number; label: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={36} rx={18} fill="#101010" stroke={LINE} />
      <circle cx={x + 19} cy={y + 18} r={5} fill="none" stroke={P} strokeWidth={2} />
      <T x={x + 34} y={y + 22.5} size={12.5} weight={600}>{label}</T>
    </g>
  );
}

function Toast({ x, y, title, text }: { x: number; y: number; title: string; text: string }) {
  return (
    <g>
      <rect x={x} y={y} width={290} height={56} rx={12} fill="#0f1012" stroke={LINE} />
      <rect x={x + 12} y={y + 11} width={34} height={34} rx={9} fill={P} />
      <path d={`M${x + 22} ${y + 31} h14 l-2 -3 v-5 a5 5 0 0 0 -10 0 v5 z`} fill="none" stroke="#0D0D0D" strokeWidth={1.8} strokeLinejoin="round" />
      <T x={x + 58} y={y + 25} size={12.5} weight={700}>{title}</T>
      <T x={x + 58} y={y + 42} size={10.5} fill={MUTED}>{text}</T>
    </g>
  );
}

function Scene({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" role="img" aria-label={label} className="absolute inset-0 h-full w-full">
      <defs>
        <pattern id={`${id}-grid`} width={40} height={40} patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" fill="none" stroke="rgb(255 255 255 / 0.045)" />
        </pattern>
        <radialGradient id={`${id}-glow`} cx="92%" cy="0%" r="60%">
          <stop offset="0%" stopColor={P} stopOpacity={0.22} />
          <stop offset="100%" stopColor={P} stopOpacity={0} />
        </radialGradient>
        <linearGradient id={`${id}-teal`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={P} />
          <stop offset="100%" stopColor={PD} />
        </linearGradient>
      </defs>
      <rect width={800} height={500} fill="#0D0D0D" />
      <rect width={800} height={500} fill={`url(#${id}-grid)`} />
      <rect width={800} height={500} fill={`url(#${id}-glow)`} />
      <circle cx={46} cy={318} r={18} fill="none" stroke="rgb(255 255 255 / 0.3)" />
      <circle cx={78} cy={282} r={3.5} fill={P} />
      {children}
    </svg>
  );
}

/** CRM de téléprospection : liste de prospects, softphone et journal d'appels. */
function CrmArt() {
  const rows = [
    { c: '#6C63FF', tag: 'Qualifié', on: true },
    { c: '#FF8A4C', tag: 'À rappeler', on: false },
    { c: P, tag: 'Qualifié', on: true },
    { c: '#E5B567', tag: 'Nouveau', on: false },
    { c: '#6C63FF', tag: 'À rappeler', on: false },
  ];
  const stats = [
    { label: 'Appels', value: '128' },
    { label: 'Qualifiés', value: '37' },
    { label: 'Rappels', value: '12' },
  ];
  return (
    <Scene id="crm" label="Illustration de Lucane CRM : liste de prospects et softphone intégré">
      <rect x={190} y={122} width={400} height={318} rx={14} fill={PANEL} stroke={LINE} />
      <T x={212} y={170} size={15} weight={700}>Prospects</T>
      {stats.map((s, i) => (
        <g key={s.label}>
          <rect x={208 + i * 126} y={186} width={116} height={54} rx={10} fill={i === 0 ? 'url(#crm-teal)' : PANEL_UP} stroke={i === 0 ? 'none' : LINE} />
          <T x={220 + i * 126} y={206} size={10} fill={i === 0 ? 'rgb(255 255 255 / 0.85)' : MUTED}>{s.label}</T>
          <T x={220 + i * 126} y={229} size={18} weight={700} fill={i === 0 ? '#fff' : S}>{s.value}</T>
        </g>
      ))}
      {rows.map((r, i) => (
        <g key={i}>
          <circle cx={224} cy={272 + i * 34} r={10} fill={r.c} />
          <rect x={244} y={265 + i * 34} width={120 - (i % 2) * 22} height={6} rx={3} fill="rgb(255 255 255 / 0.55)" />
          <rect x={244} y={277 + i * 34} width={70} height={4} rx={2} fill={BAR} />
          <rect x={452} y={262 + i * 34} width={86} height={20} rx={10} fill={r.on ? 'rgb(var(--primary-rgb) / 0.16)' : 'rgb(255 255 255 / 0.06)'} />
          <T x={495} y={276 + i * 34} size={9.5} anchor="middle" fill={r.on ? P : MUTED} weight={600}>{r.tag}</T>
        </g>
      ))}

      <Float>
        <rect x={568} y={112} width={192} height={340} rx={26} fill={PANEL_UP} stroke={LINE} />
        <T x={664} y={146} size={10.5} fill={P} weight={700} anchor="middle">APPEL EN COURS</T>
        <T x={664} y={172} size={15} weight={700} anchor="middle">+33 6 12 34 56 78</T>
        <T x={664} y={192} size={11} fill={MUTED} anchor="middle">02:14</T>
        {Array.from({ length: 17 }, (_, i) => {
          const h = 6 + ((i * 7) % 5) * 5 + (i % 3) * 3;
          return <rect key={i} x={604 + i * 7.2} y={222 - h / 2} width={3.4} height={h} rx={1.7} fill={P} opacity={0.55 + (i % 3) * 0.2} />;
        })}
        {Array.from({ length: 9 }, (_, i) => (
          <g key={i}>
            <circle cx={618 + (i % 3) * 46} cy={270 + Math.floor(i / 3) * 42} r={16} fill="rgb(255 255 255 / 0.06)" />
            <T x={618 + (i % 3) * 46} y={274.5 + Math.floor(i / 3) * 42} size={12} anchor="middle" fill="rgb(255 255 255 / 0.8)">{i + 1}</T>
          </g>
        ))}
        <circle cx={664} cy={414} r={21} fill="#E5484D" />
        <path d="M652 417 q12 -9 24 0 v3 h-6 v-3 q-6 -2 -12 0 v3 h-6 z" fill="#fff" />
      </Float>

      <Float delay={0.6}>
        <Chip x={40} y={112} w={128} label="200+ pays" />
      </Float>
      <Float delay={1.1}>
        <Chip x={22} y={172} w={164} label="Appel enregistré" />
      </Float>
      <Float delay={0.3}>
        <Toast x={262} y={86} title="Prospect qualifié" text="Ajouté au journal d'appels" />
      </Float>
    </Scene>
  );
}

/** Réservation de voyages : itinéraire sur la carte, fiche destination et confirmation. */
function TripArt() {
  return (
    <Scene id="trip" label="Illustration de Trip Manager : itinéraire sur une carte et réservation d'un séjour">
      <rect x={190} y={122} width={400} height={318} rx={14} fill={PANEL} stroke={LINE} />
      <T x={212} y={170} size={15} weight={700}>Itinéraire</T>
      <T x={212} y={188} size={10.5} fill={MUTED}>5 jours · 3 étapes</T>
      <path d="M214 330 q40 -70 110 -50 q60 20 50 80 q-10 50 -80 40 q-70 -10 -80 -70 z" fill="rgb(255 255 255 / 0.035)" />
      <path d="M400 230 q60 -40 120 -10 q40 30 10 80 q-40 40 -100 10 q-50 -30 -30 -80 z" fill="rgb(255 255 255 / 0.035)" />
      <path d="M250 372 C 300 300, 330 330, 372 276 S 470 250, 520 222" fill="none" stroke={P} strokeWidth={2.4} strokeDasharray="2 9" strokeLinecap="round" />
      {[
        { x: 250, y: 372, n: '1' },
        { x: 372, y: 276, n: '2' },
        { x: 520, y: 222, n: '3' },
      ].map((p) => (
        <g key={p.n}>
          <circle cx={p.x} cy={p.y} r={15} fill="rgb(var(--primary-rgb) / 0.18)" />
          <circle cx={p.x} cy={p.y} r={9} fill={P} />
          <T x={p.x} y={p.y + 3.6} size={10} weight={700} fill="#0D0D0D" anchor="middle">{p.n}</T>
        </g>
      ))}
      <path d="M436 244 l16 -5 l-9 14 l-1 -7 z" fill={S} />

      <Float>
        <rect x={548} y={150} width={212} height={262} rx={16} fill={PANEL_UP} stroke={LINE} />
        <rect x={560} y={162} width={188} height={108} rx={10} fill="url(#trip-teal)" />
        <circle cx={712} cy={192} r={13} fill={S} opacity={0.9} />
        <path d="M560 270 v-22 l40 -36 l32 26 l30 -40 l44 50 l42 -30 v52 z" fill="rgb(0 0 0 / 0.3)" />
        <T x={562} y={296} size={15} weight={700}>Marrakech</T>
        <T x={562} y={314} size={10.5} fill={MUTED}>3 nuits · Riad · Circuit guidé</T>
        <T x={562} y={346} size={14} weight={700} fill={P}>1 240 MAD</T>
        <rect x={562} y={362} width={184} height={34} rx={9} fill={P} />
        <T x={654} y={383.5} size={12} weight={700} fill="#0D0D0D" anchor="middle">Réserver</T>
      </Float>

      <Float delay={0.9}>
        <rect x={34} y={338} width={196} height={84} rx={14} fill="#101010" stroke={LINE} />
        <circle cx={62} cy={368} r={13} fill={P} />
        <path d="M56 368 l4.5 4.5 l8 -9" fill="none" stroke="#0D0D0D" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
        <T x={84} y={366} size={11.5} weight={700}>Réservation</T>
        <T x={84} y={381} size={11.5} weight={700}>confirmée</T>
        <rect x={50} y={398} width={150} height={5} rx={2.5} fill={BAR} />
      </Float>
      <Float delay={0.5}>
        <Chip x={46} y={112} w={110} label="Circuits" />
      </Float>
      <Float delay={1.2}>
        <Chip x={22} y={172} w={152} label="Hébergements" />
      </Float>
      <Float delay={0.2}>
        <Toast x={262} y={86} title="Votre voyage" text="Départ demain à 9 h 15" />
      </Float>
    </Scene>
  );
}

/** Marketplace mobile : boutiques, commande en cours et paiement à la livraison. */
function YabissoArt() {
  const tiles = ['#6C63FF', '#FF8A4C', '#3ED6C4', '#E5B567'];
  return (
    <Scene id="yab" label="Illustration de Yabisso : application mobile de marketplace">
      <g transform="rotate(8 590 280)">
        <rect x={486} y={84} width={206} height={390} rx={28} fill="#161616" stroke={LINE} />
        <rect x={504} y={112} width={170} height={84} rx={10} fill="#4B4FC4" />
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect x={504} y={220 + i * 46} width={120 - (i % 2) * 30} height={7} rx={3.5} fill="rgb(255 255 255 / 0.4)" />
            <rect x={504} y={234 + i * 46} width={150} height={5} rx={2.5} fill={BAR} />
          </g>
        ))}
      </g>

      <Float>
        <rect x={296} y={44} width={224} height={440} rx={30} fill="#111112" stroke={LINE} />
        <T x={316} y={74} size={11} weight={700} fill="#fff">9:41</T>
        <rect x={376} y={58} width={64} height={18} rx={9} fill="#0a0a0a" />
        <rect x={312} y={156} width={192} height={84} rx={12} fill="url(#yab-teal)" />
        <T x={326} y={182} size={12} weight={700} fill="#fff">Commande en cours</T>
        <T x={326} y={199} size={9.5} fill="rgb(255 255 255 / 0.85)">Paiement à la livraison</T>
        <rect x={326} y={214} width={164} height={7} rx={3.5} fill="rgb(255 255 255 / 0.3)" />
        <rect x={326} y={214} width={112} height={7} rx={3.5} fill="#fff" />
        <T x={314} y={268} size={12} weight={700} fill="#fff">Boutiques</T>
        {tiles.map((c, i) => (
          <g key={c}>
            <rect x={312 + (i % 2) * 100} y={282 + Math.floor(i / 2) * 78} width={92} height={68} rx={10} fill="rgb(255 255 255 / 0.05)" />
            <rect x={320 + (i % 2) * 100} y={290 + Math.floor(i / 2) * 78} width={26} height={26} rx={7} fill={c} />
            <rect x={320 + (i % 2) * 100} y={326 + Math.floor(i / 2) * 78} width={58} height={5} rx={2.5} fill="rgb(255 255 255 / 0.45)" />
            <rect x={320 + (i % 2) * 100} y={337 + Math.floor(i / 2) * 78} width={34} height={5} rx={2.5} fill={P} />
          </g>
        ))}
        <path d="M296 444 h224" stroke={LINE} />
        {[0, 1, 2, 3].map((i) => (
          <circle key={i} cx={336 + i * 48} cy={462} r={i === 0 ? 6 : 5} fill={i === 0 ? P : 'none'} stroke={i === 0 ? 'none' : MUTED} strokeWidth={1.6} />
        ))}
      </Float>

      <Float delay={0.4}>
        <Toast x={254} y={88} title="Nouvelle commande" text="Panier · 3 articles à préparer" />
      </Float>
      <Float delay={0.8}>
        <Chip x={62} y={96} w={136} label="Ma boutique" />
      </Float>
      <Float delay={1.3}>
        <Chip x={84} y={152} w={140} label="Notifications" />
      </Float>
      <Float delay={0.6}>
        <rect x={62} y={348} width={170} height={48} rx={12} fill="#131313" stroke={LINE} />
        <rect x={78} y={360} width={14} height={24} rx={3.5} fill="none" stroke={S} strokeWidth={1.8} />
        <T x={106} y={368} size={9} fill={MUTED}>Compatible</T>
        <T x={106} y={384} size={13} weight={700}>iOS</T>
        <rect x={62} y={408} width={170} height={48} rx={12} fill="#131313" stroke={LINE} />
        <path d="M79 420 l14 12 l-14 12 z" fill="none" stroke={S} strokeWidth={1.8} strokeLinejoin="round" />
        <T x={106} y={428} size={9} fill={MUTED}>Compatible</T>
        <T x={106} y={444} size={13} weight={700}>Android</T>
      </Float>
    </Scene>
  );
}

/** Tri de fichiers de contacts : import, filtres, lignes retenues ou écartées, export. */
function FilterArt() {
  const rows = [true, true, false, true, false, true];
  const filters = [
    { label: 'Pays : FR', w: 84 },
    { label: 'Mobile', w: 66 },
    { label: 'Sans doublons', w: 110 },
  ];
  let fx = 262;
  return (
    <Scene id="flt" label="Illustration de Lucane Filter : tri et filtrage d'un fichier de contacts">
      <path d="M196 232 C 226 232, 216 200, 246 200" fill="none" stroke={P} strokeWidth={2} strokeDasharray="2 8" strokeLinecap="round" />
      <rect x={244} y={60} width={400} height={388} rx={14} fill={PANEL} stroke={LINE} />
      <T x={262} y={92} size={15} weight={700}>Filtrage des contacts</T>
      {filters.map((f) => {
        const x = fx;
        fx += f.w + 10;
        return (
          <g key={f.label}>
            <rect x={x} y={108} width={f.w} height={24} rx={12} fill="rgb(var(--primary-rgb) / 0.12)" stroke={P} strokeOpacity={0.6} />
            <T x={x + f.w / 2} y={124} size={10} weight={600} fill={P} anchor="middle">{f.label}</T>
          </g>
        );
      })}
      <path d="M262 150 h364" stroke={LINE} />
      {rows.map((ok, i) => (
        <g key={i} opacity={ok ? 1 : 0.38}>
          <rect x={262} y={164 + i * 36} width={16} height={16} rx={4} fill={ok ? P : 'none'} stroke={ok ? 'none' : MUTED} />
          {ok && <path d={`M266 ${172 + i * 36} l3 3 l5.5 -6`} fill="none" stroke="#0D0D0D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />}
          <rect x={292} y={168 + i * 36} width={110 - (i % 3) * 14} height={7} rx={3.5} fill="rgb(255 255 255 / 0.55)" />
          <rect x={424} y={168 + i * 36} width={96} height={7} rx={3.5} fill={BAR} />
          <rect x={544} y={164 + i * 36} width={66} height={16} rx={8} fill={ok ? 'rgb(var(--primary-rgb) / 0.16)' : 'rgb(255 255 255 / 0.06)'} />
          <T x={577} y={175.5 + i * 36} size={8.5} weight={600} fill={ok ? P : MUTED} anchor="middle">{ok ? 'Retenu' : 'Doublon'}</T>
          {!ok && <path d={`M290 ${171.5 + i * 36} h232`} stroke="rgb(255 255 255 / 0.6)" />}
        </g>
      ))}
      <T x={262} y={402} size={10.5} fill={MUTED}>Tri en cours</T>
      <T x={626} y={402} size={10.5} weight={700} fill={P} anchor="end">72 %</T>
      <rect x={262} y={412} width={364} height={8} rx={4} fill="rgb(255 255 255 / 0.1)" />
      <rect x={262} y={412} width={262} height={8} rx={4} fill="url(#flt-teal)" />

      <Float delay={0.3}>
        <rect x={30} y={170} width={166} height={124} rx={14} fill={PANEL_UP} stroke={LINE} />
        <path d="M50 190 h22 l10 10 v32 h-32 z" fill="none" stroke={P} strokeWidth={2} strokeLinejoin="round" />
        <path d="M72 190 v10 h10" fill="none" stroke={P} strokeWidth={2} strokeLinejoin="round" />
        <T x={50} y={258} size={12.5} weight={700}>contacts.csv</T>
        <T x={50} y={276} size={10.5} fill={MUTED}>12 480 lignes</T>
      </Float>
      <Float delay={0.9}>
        <rect x={606} y={300} width={164} height={122} rx={14} fill={PANEL_UP} stroke={LINE} />
        <T x={622} y={328} size={12.5} weight={700}>export.xlsx</T>
        <T x={622} y={346} size={10.5} fill={MUTED}>8 942 contacts retenus</T>
        <rect x={622} y={364} width={132} height={38} rx={9} fill={P} />
        <path d="M646 376 v12 m-5 -5 l5 5 l5 -5" fill="none" stroke="#0D0D0D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        <T x={700} y={388} size={12} weight={700} fill="#0D0D0D" anchor="middle">Exporter</T>
      </Float>
      <Float delay={1.2}>
        <Chip x={40} y={104} w={148} label="CSV et Excel" />
      </Float>
      <Float delay={0.6}>
        <Chip x={596} y={150} w={174} label="Tri en tâche de fond" />
      </Float>
    </Scene>
  );
}

/** Scène générique : la maquette d'un site vitrine, pour un site qui ne s'affiche pas en direct. */
function SiteArt({ project }: { project: Project }) {
  const id = `site-${project.slug}`;
  return (
    <Scene id={id} label={`Illustration du site ${project.title}`}>
      <rect x={150} y={70} width={500} height={372} rx={14} fill={PANEL} stroke={LINE} />
      <rect x={172} y={92} width={22} height={22} rx={6} fill={P} />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={440 + i * 56} y={100} width={38} height={6} rx={3} fill={BAR} />
      ))}
      <rect x={604} y={92} width={28} height={22} rx={6} fill="none" stroke={LINE} />
      <T x={400} y={200} size={34} weight={700} anchor="middle">{project.title}</T>
      <rect x={290} y={224} width={220} height={7} rx={3.5} fill="rgb(255 255 255 / 0.4)" />
      <rect x={320} y={240} width={160} height={7} rx={3.5} fill={BAR} />
      <rect x={340} y={266} width={120} height={34} rx={9} fill={P} />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={172 + i * 156} y={330} width={144} height={90} rx={10} fill={PANEL_UP} stroke={LINE} />
          <rect x={186 + i * 156} y={344} width={22} height={22} rx={6} fill={i === 1 ? `url(#${id}-teal)` : 'rgb(255 255 255 / 0.12)'} />
          <rect x={186 + i * 156} y={380} width={96} height={6} rx={3} fill="rgb(255 255 255 / 0.4)" />
          <rect x={186 + i * 156} y={394} width={66} height={5} rx={2.5} fill={BAR} />
        </g>
      ))}
      <Float delay={0.4}>
        <Chip x={40} y={130} w={132} label="Responsive" />
      </Float>
      <Float delay={1}>
        <Chip x={636} y={250} w={130} label="Site vitrine" />
      </Float>
    </Scene>
  );
}

const scenes: Record<string, () => JSX.Element> = {
  'lucane-crm': CrmArt,
  'trip-manager': TripArt,
  yabisso: YabissoArt,
  'lucane-filter': FilterArt,
};

export default function ProjectArt({ project }: { project: Project }) {
  const Art = scenes[project.slug];
  return Art ? <Art /> : <SiteArt project={project} />;
}
