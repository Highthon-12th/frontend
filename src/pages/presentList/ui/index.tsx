import { useState } from "react";
import { ListItem } from "@widgets/listItem/ui";
import { usePresents } from "../api/usePresents";

interface IPresent {
  id: number;
  name: string;
  selectedRecords: {
    id: number;
    category: string;
    content: string;
    imageUrl: string;
    createdAt: string;
  }[];
  recipientId: number;
  isSent: boolean;
  createdAt: string;
}
const category = [
  {
    name: "전체",
    value: "ALL",
  },
  {
    name: "완료",
    value: "COMP",
  },
  {
    name: "임시저장",
    value: "UNCOMP",
  },
];

export const PresentListPage = () => {
  const [selected, setSelected] = useState<string>("ALL");
  const { data } = usePresents();

  const filtered = data?.filter((item: IPresent) => {
    if (selected === "ALL") return true;
    if (selected === "COMP") return item.isSent;
    if (selected === "UNCOMP") return !item.isSent;
    return true;
  });

  return (
    <div className="h-full overflow-y-auto">
      <div className="px-5 py-5 flex gap-2">
        {category.map((category, idx) => {
          return (
            <label key={idx} className="cursor-pointer">
              <input
                name="category"
                type="radio"
                value={category.value}
                className="peer sr-only"
                checked={selected === category.value}
                onChange={(e) => setSelected(e.target.value)}
              />

              <div
                className="
                    px-3.5 py-2
                    bg-bg
                    border border-stroke
                    rounded-md
                    peer-checked:bg-main
                    peer-checked:border-main
                    transition-colors
                    text-grey
                    peer-checked:text-white
                    "
              >
                <span className="text-sm font-medium">{category.name}</span>
              </div>
            </label>
          );
        })}
      </div>
      <div className="px-5 flex flex-col gap-3">
        {filtered?.map((item: IPresent) => (
          <ListItem
            id={item.id}
            name={item.name}
            date={item.createdAt}
            status={item.isSent}
            recipientId={item.recipientId}
          />
        ))}
      </div>
    </div>
  );
};
