import { useEffect, useMemo } from "react";
import { PhotoBox } from "@shared/ui/PhotoBox";
import { TextBox } from "@shared/ui/Textbox";
import { type IMemories, useFriendMemories } from "../api/useFriendMemories";
import { useCategoryStore } from "@features/category/model/categoryStore";

interface FriendMemoriesProps {
  id?: string;
}

export const FriendMemories = ({ id = "" }: FriendMemoriesProps) => {
  const { data: apiData } = useFriendMemories(id);
  const data = useMemo(() => apiData ?? [], [apiData]);
  const { activeCategory, setCounts } = useCategoryStore();

  useEffect(() => {
    const counts = {
      memory:  data.filter((d) => d.category === "memory").length,
      sports:  data.filter((d) => d.category === "sports").length,
      music:   data.filter((d) => d.category === "music").length,
      fashion: data.filter((d) => d.category === "fashion").length,
      color:   data.filter((d) => d.category === "color").length,
      talking: data.filter((d) => d.category === "talking").length,
    };
    setCounts(counts);
  }, [data]);

  const filtered = data.filter((d) => d.category === activeCategory);
  const left = filtered.filter((_, i) => i % 2 === 0);
  const right = filtered.filter((_, i) => i % 2 === 1);

  const renderItem = (item: IMemories) =>
    item.imageUrl ? (
      <PhotoBox key={item.id} text={item.content} date={item.createdAt} photo={item.imageUrl} />
    ) : (
      <TextBox key={item.id} text={item.content} date={item.createdAt} />
    );

  return (
    <div className="px-5 pt-2.5 flex gap-3.75">
      <div className="flex flex-col gap-3.75 flex-1">
        {left.map(renderItem)}
      </div>
      <div className="flex flex-col gap-3.75 flex-1">
        {right.map(renderItem)}
      </div>
    </div>
  );
};
