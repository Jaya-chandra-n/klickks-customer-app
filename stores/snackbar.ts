import { create } from 'zustand';

type SnackbarKind = 'error' | 'warning' | 'info' | 'success';

type SnackbarState = {
  visible: boolean;
  message: string;
  kind: SnackbarKind;
  durationMs: number;
  showError: (msg: string) => void;
  showSuccess: (msg: string) => void;
  showInfo: (msg: string) => void;
  showWarning: (msg: string) => void;
  hide: () => void;
};

export const useSnackbarStore = create<SnackbarState>((set) => ({
  visible: false,
  message: '',
  kind: 'info',
  durationMs: 3000,
  showError: (msg) => set({ visible: true, message: msg, kind: 'error', durationMs: 3000 }),
  showSuccess: (msg) => set({ visible: true, message: msg, kind: 'success', durationMs: 3000 }),
  showInfo: (msg) => set({ visible: true, message: msg, kind: 'info', durationMs: 3000 }),
  showWarning: (msg) => set({ visible: true, message: msg, kind: 'warning', durationMs: 3000 }),
  hide: () => set({ visible: false }),
}));
