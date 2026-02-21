import { create } from "zustand";

type CategoryId = "memory" | "sports" | "music" | "fashion" | "color" | "talking";

interface CategoryState {
  activeCategory: CategoryId;
  counts: Record<CategoryId, number>;
  setActiveCategory: (id: CategoryId) => void;
  setCounts: (counts: Record<CategoryId, number>) => void;
}

export const useCategoryStore = create<CategoryState>((set) => ({
  activeCategory: "memory",
  counts: { memory: 0, sports: 0, music: 0, fashion: 0, color: 0, talking: 0 },
  setActiveCategory: (activeCategory) => set({ activeCategory }),
  setCounts: (counts) => set({ counts }),
}));
