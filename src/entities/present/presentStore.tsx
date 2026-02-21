import { create } from "zustand";

interface PresnetState {
  item: string;
  setItem: (item: string) => void;
  memories: string[];
  setMomories: (memories: string[]) => void;
}

export const usePresentStore = create<PresnetState>((set) => ({
  item: "",
  memories: [],
  setItem: (item: string) => set(() => ({ item })),
  setMomories: (memories: string[]) => set(() => ({ memories })),
}));
