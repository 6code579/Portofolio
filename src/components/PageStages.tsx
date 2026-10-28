import { useEffect, useState } from 'react';
import portrait from '../images/portrait2.webp';
import FloatingStage from './FloatingStage';
import { MiniScreen } from './Hero';

/** Les sites en direct se chargent un peu après l'affichage de la bannière. */
function DelayedScreen({ slug }: { slug: string }) {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const id = window.setTimeout(() => setOn(true), 2500);
    return () => window.clearTimeout(id);
  }, []);
  return <MiniScreen slug={slug} enabled={on} />;
}

const stageSize = 'h-[19rem] md:h-[26rem]';

export function ProjectsStage() {
  return (
    <FloatingStage
      className={stageSize}
      items={[
        { key: 'a', node: <DelayedScreen slug="lucane" />, pos: 'left-[0%] top-[16%] w-[54%]', depth: 0.6, tilt: -6 },
        { key: 'b', node: <DelayedScreen slug="agrobusiness" />, pos: 'right-[0%] top-[0%] w-[46%]', depth: 0.9, tilt: 5 },
        { key: 'c', node: <DelayedScreen slug="hermon" />, pos: 'right-[6%] bottom-[0%] w-[52%]', depth: 1.2, tilt: 3 },
      ]}
    />
  );
}

function Chip({ label }: { label: string }) {
  return (
    <span className="flex items-center gap-2 rounded-md border border-secondary/25 bg-deep px-4 py-2.5 text-sm text-light shadow-[0_20px_50px_-20px_rgb(0_0_0/0.9)]">
      <span className="h-2 w-2 rounded-full bg-primary" />
      {label}
    </span>
  );
}

export function AboutStage() {
  return (
    <FloatingStage
      className={stageSize}
      items={[
        {
          key: 'photo',
          pos: 'left-[26%] top-[2%] h-[92%] w-[44%]',
          depth: 0.3,
          node: (
            <div className="h-full w-full overflow-hidden rounded-md border border-secondary/25 bg-deep shadow-[0_40px_90px_-30px_rgb(0_0_0/0.9)]">
              <img src={portrait} alt="" width={359} height={436} decoding="async" className="h-full w-full object-cover" />
            </div>
          ),
        },
        { key: 'django', node: <Chip label="Django" />, pos: 'left-[0%] top-[16%]', depth: 1.1, tilt: -5 },
        { key: 'react', node: <Chip label="React" />, pos: 'right-[2%] top-[34%]', depth: 0.9, tilt: 4 },
        { key: 'python', node: <Chip label="Python" />, pos: 'left-[6%] bottom-[10%]', depth: 1.3, tilt: 3 },
      ]}
    />
  );
}
