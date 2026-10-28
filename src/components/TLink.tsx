import type { AnchorHTMLAttributes, MouseEvent } from 'react';
import { useLocation } from 'react-router-dom';
import { useShell } from '../contexts/ShellContext';
import { scrollToTop } from '../lib/motion';

interface TLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  to: string;
}

/** Lien interne : déclenche la transition de page au lieu d'un rechargement. */
export default function TLink({ to, onClick, children, ...rest }: TLinkProps) {
  const { go } = useShell();
  const { pathname } = useLocation();

  const handle = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    if (to === pathname) scrollToTop();
    else go(to);
  };

  return (
    <a href={to} onClick={handle} {...rest}>
      {children}
    </a>
  );
}
