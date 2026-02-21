import { create } from "zustand";

interface PresnetState {
  item: string;
  setItem: (item: string) => void;
  memories: string[];
  setMomories: (memories: string[]) => void;
  giftOption: "kakao" | "direct" | null;
  setGiftOption: (giftOption: "kakao" | "direct" | null) => void;
}

export const usePresentStore = create<PresnetState>((set) => ({
  item: "",
  memories: [],
  giftOption: null,
  setItem: (item: string) => set(() => ({ item })),
  setMomories: (memories: string[]) => set(() => ({ memories })),
  setGiftOption: (giftOption) => set(() => ({ giftOption })),
}));
