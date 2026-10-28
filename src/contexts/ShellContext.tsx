import { createContext, useContext } from 'react';

interface ShellValue {
  /** Vrai quand le préloader ou la transition de page a levé le rideau : les révélations peuvent partir. */
  ready: boolean;
  go: (to: string) => void;
}

export const ShellContext = createContext<ShellValue>({ ready: true, go: () => {} });

export const useShell = () => useContext(ShellContext);
