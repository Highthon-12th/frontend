import { create } from "zustand";

interface PresentButtonActiveState {
  active: boolean;
  setActive: (active: boolean) => void;
}

export const usePresentButtonActiveStore = create<PresentButtonActiveState>(
  (set) => ({
    active: false,
    setActive: (active: boolean) => set(() => ({ active })),
  }),
);
