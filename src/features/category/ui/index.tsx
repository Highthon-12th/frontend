import { useState } from "react";

const TABS = [
  { id: "memory", label: "추억", count: 2 },
  { id: "sports", label: "스포츠", count: 2},
  { id: "music", label: "음악", count: 2 },
  { id: "fashion", label: "패션", count: 2 },
  { id: "color", label: "컬러", count: 2 },
  { id: "talking", label: "대화", count: 2 },
];

export const MemoryFilterTabBar = () => {
  const [activeTab, setActiveTab] = useState("memory");

  return (
    <div className="\">
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex gap-2 items-center w-max">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3.5 py-2 rounded-md text-sm font-semibold transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === tab.id
                ? "bg-main text-white"
                : "border border-[#F1F1F1] bg-[#F9F9F9] text-grey"
            }`}
          >
            {tab.label}
            {tab.count !== undefined && ` ${tab.count}`}
          </button>
        ))}
      </div>
    </div>
    </div>
  );
};
