import { useState } from "react";
import { ListItem } from "@widgets/listItem/ui";

type FilterId = "all" | "confirmed" | "unread" | "draft";

interface IPresentItem {
  id: number;
  title: string;
  date: string;
  status: "confirmed" | "unread" | "draft";
}

const FILTERS: { id: FilterId; label: string }[] = [
  { id: "all",       label: "전체" },
  { id: "confirmed", label: "확인 완료" },
  { id: "unread",    label: "읽지 않음" },
  { id: "draft",     label: "임시 저장" },
];

const data: IPresentItem[] = [
  { id: 1, title: "바나나 우유",    date: "26/01/23", status: "confirmed" },
  { id: 3, title: "과자 12종 세트", date: "26/01/24", status: "unread" },
  { id: 2, title: "스탠리 텀블러",  date: "26/01/25", status: "draft" },
];

export const PresentListPage = () => {
  const [activeFilter, setActiveFilter] = useState<FilterId>("all");

  const filtered = [...data]
    .sort((a, b) => b.id - a.id)
    .filter((item) => activeFilter === "all" ? true : item.status === activeFilter);

  const renderItem = (item: IPresentItem) => (
    <ListItem
      key={item.id}
      title={item.title}
      date={item.date}
      badge={item.status === "confirmed" ? "확인 완료" : undefined}
      buyLabel={item.status === "draft" ? "구매하기" : undefined}
    />
  );

  return (
    <div className="h-full overflow-y-auto">
      <div className="px-5 py-5 flex gap-2 justify-center">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            onClick={() => setActiveFilter(f.id)}
            className={`px-3.5 py-2 rounded-[6px] text-sm font-semibold whitespace-nowrap transition-colors ${
              activeFilter === f.id
                ? "bg-main text-white"
                : "border border-stroke bg-white text-grey"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className="px-5 flex flex-col gap-3">
        {filtered.map(renderItem)}
      </div>
    </div>
  );
};
