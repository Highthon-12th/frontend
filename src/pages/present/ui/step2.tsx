import { useEffect, useMemo } from "react";
import { TextBox } from "@shared/ui/Textbox";
import { PhotoBox } from "@shared/ui/PhotoBox";
import { usePresentStore } from "src/entities/present/presentStore";
import { usePresentButtonActiveStore } from "src/entities/present/buttonActiveStore";
import {
  type IMemories,
  useFriendMemories,
} from "@features/memories/api/useFriendMemories";
import { useRecipientById } from "@shared/api/useRecipientById";

const MAX = 10;

interface PresentStep2Props {
  id?: string;
}

export const PresentStep2 = ({ id = "" }: PresentStep2Props) => {
  const { memories, setMomories } = usePresentStore();
  const { setActive } = usePresentButtonActiveStore();
  const { data: apiData } = useFriendMemories(id);
  const data = useMemo(() => apiData ?? [], [apiData]);
  const profileInfo = useRecipientById(id);

  const left = data.filter((_, i) => i % 2 === 0);
  const right = data.filter((_, i) => i % 2 === 1);

  useEffect(() => {
    setActive(memories.length > 0);
  }, [memories]);

  const toggle = (itemId: string) => {
    const next = memories.includes(itemId)
      ? memories.filter((m) => m !== itemId)
      : memories.length < MAX
        ? [...memories, itemId]
        : memories;
    setMomories(next);
  };

  const renderItem = (item: IMemories) => {
    const itemId = String(item.id);
    return item.imageUrl ? (
      <PhotoBox
        key={item.id}
        text={item.content}
        date={item.createdAt}
        photo={item.imageUrl}
        select={memories.includes(itemId)}
        onClick={() => toggle(itemId)}
      />
    ) : (
      <TextBox
        key={item.id}
        text={item.content}
        date={item.createdAt}
        select={memories.includes(itemId)}
        onClick={() => toggle(itemId)}
      />
    );
  };

  return (
    <div className="w-full flex flex-col">
      <div className="sticky top-0 z-10 bg-bg w-full flex flex-col px-5 gap-3 pb-5 before:absolute before:inset-x-0 before:-top-2 before:h-2 before:bg-white before:content-['']">
        <div className="flex justify-between">
          <p className="text-lg text-text font-semibold">
            <span className="text-main">{profileInfo.data?.name}</span>
            에게 보내고 싶은 선물이 있나요?
          </p>
          <p className="text-lg text-main font-semibold">
            {memories.length}/{MAX}
          </p>
        </div>
        <p className="text-[14px] text-grey font-medium leading-3.5">
          한 번에 한 품목만 작성 할 수 있어요
        </p>
      </div>
      <div className="px-5 pt-2.5">
        <div className="flex gap-3.75">
          <div className="flex flex-col gap-3.75 flex-1">
            {left.map(renderItem)}
          </div>
          <div className="flex flex-col gap-3.75 flex-1">
            {right.map(renderItem)}
          </div>
        </div>
      </div>
    </div>
  );
};
