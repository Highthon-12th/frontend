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
      MEMORY:  data.filter((d) => d.category === "MEMORY").length,
      SPORTS:  data.filter((d) => d.category === "SPORTS").length,
      MUSIC:   data.filter((d) => d.category === "MUSIC").length,
      FASHION: data.filter((d) => d.category === "FASHION").length,
      COLOR:   data.filter((d) => d.category === "COLOR").length,
      TALKING: data.filter((d) => d.category === "TALKING").length,
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
