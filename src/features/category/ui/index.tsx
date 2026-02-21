import { useCategoryStore } from "../model/categoryStore";

const TABS = [
  { id: "memory",  label: "추억" },
  { id: "sports",  label: "스포츠" },
  { id: "music",   label: "음악" },
  { id: "fashion", label: "패션" },
  { id: "color",   label: "컬러" },
  { id: "talking", label: "대화" },
] as const;

export const MemoryFilterTabBar = () => {
  const { activeCategory, counts, setActiveCategory } = useCategoryStore();

  return (
    <div className="py-5 pl-5">
      <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex gap-2 items-center w-max pr-5">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-3.5 py-2 rounded-md text-sm font-semibold transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                activeCategory === tab.id
                  ? "bg-main text-white"
                  : "border border-[#F1F1F1] bg-[#F9F9F9] text-grey"
              }`}
            >
              <span>{tab.label}</span>
              {activeCategory === tab.id && <span>{counts[tab.id]}</span>}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
