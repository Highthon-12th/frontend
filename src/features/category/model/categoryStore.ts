import { create } from "zustand";

type CategoryId = "MEMORY" | "SPORTS" | "MUSIC" | "FASHION" | "COLOR" | "TALKING";

interface CategoryState {
  activeCategory: CategoryId;
  counts: Record<CategoryId, number>;
  setActiveCategory: (id: CategoryId) => void;
  setCounts: (counts: Record<CategoryId, number>) => void;
}

export const useCategoryStore = create<CategoryState>((set) => ({
  activeCategory: "MEMORY",
  counts: { MEMORY: 0, SPORTS: 0, MUSIC: 0, FASHION: 0, COLOR: 0, TALKING: 0 },
  setActiveCategory: (activeCategory) => set({ activeCategory }),
  setCounts: (counts) => set({ counts }),
}));
