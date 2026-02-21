import { create } from "zustand";

interface PresnetStepState {
  step: number;
  next: () => void;
  prev: () => void;
}

export const usePresentStepStore = create<PresnetStepState>((set) => ({
  step: 1,
  next: () =>
    set((state) => {
      let returnStep = state.step + 1;

      if (returnStep > 3) {
        returnStep = 3;
      }

      return { step: returnStep };
    }),
  prev: () =>
    set((state) => {
      let returnStep = state.step - 1;

      if (returnStep < 1) {
        returnStep = 1;
      }

      return { step: returnStep };
    }),
}));
