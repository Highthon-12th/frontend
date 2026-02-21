import { useEffect } from "react";
import { TextBox } from "@shared/ui/Textbox";
import { PhotoBox } from "@shared/ui/PhotoBox";
import { usePresentStore } from "src/entities/present/presentStore";
import { usePresentButtonActiveStore } from "src/entities/present/buttonActiveStore";

const MAX = 10;

const LEFT_ITEMS = [
  { id: "0", type: "photo", text: "친구의 사진 기록입니다.", date: "2024.01.01" },
  { id: "1", type: "text",  text: "친구의 기록을 확인해보세요.", date: "2024.01.01" },
  { id: "2", type: "photo", text: "친구의 사진 기록입니다.", date: "2024.01.01" },
  { id: "3", type: "photo", text: "친구의 사진 기록입니다.", date: "2024.01.01" },
  { id: "4", type: "photo", text: "친구의 사진 기록입니다.", date: "2024.01.01" },
  { id: "5", type: "photo", text: "친구의 사진 기록입니다.", date: "2024.01.01" },
  { id: "6", type: "photo", text: "친구의 사진 기록입니다.", date: "2024.01.01" },
  { id: "7", type: "photo", text: "친구의 사진 기록입니다.", date: "2024.01.01" },
  { id: "8", type: "photo", text: "친구의 사진 기록입니다.", date: "2024.01.01" },
  { id: "9", type: "photo", text: "친구의 사진 기록입니다.", date: "2024.01.01" },
] as const;

const RIGHT_ITEMS = [
  { id: "10", type: "text",  text: "친구의 기록을 확인해보세요.", date: "2024.01.01" },
  { id: "11", type: "photo", text: "친구의 사진 기록입니다.", date: "2024.01.01" },
  { id: "12", type: "photo", text: "친구의 사진 기록입니다.", date: "2024.01.01" },
] as const;

export const PresentStep2 = () => {
  const { memories, setMomories } = usePresentStore();
  const { setActive } = usePresentButtonActiveStore();

  useEffect(() => {
    setActive(memories.length > 0);
  }, [memories]);

  const toggle = (id: string) => {
    const next = memories.includes(id)
      ? memories.filter((m) => m !== id)
      : memories.length < MAX
        ? [...memories, id]
        : memories;
    setMomories(next);
  };

  return (
    <div className="w-full flex flex-col">
      <div className="sticky top-0 z-10 bg-white w-full flex flex-col px-5 gap-3 pb-5 before:absolute before:inset-x-0 before:-top-2 before:h-2 before:bg-white before:content-['']">
        <div className="flex justify-between">
          <p className="text-lg text-text font-semibold">
            <span className="text-main">이름</span>
            에게 보내고 싶은 선물이 있나요?
          </p>
          <p className="text-lg text-main font-semibold">{memories.length}/{MAX}</p>
        </div>
        <p className="text-[14px] text-grey font-medium leading-3.5">
          한 번에 한 품목만 작성 할 수 있어요
        </p>
      </div>
      <div className="px-5 pt-2.5">
        <div className="flex gap-3.75">
          <div className="flex flex-col gap-3.75 flex-1">
            {LEFT_ITEMS.map((item) =>
              item.type === "photo" ? (
                <PhotoBox key={item.id} text={item.text} date={item.date} select={memories.includes(item.id)} onClick={() => toggle(item.id)} />
              ) : (
                <TextBox key={item.id} text={item.text} date={item.date} select={memories.includes(item.id)} onClick={() => toggle(item.id)} />
              )
            )}
          </div>
          <div className="flex flex-col gap-3.75 flex-1">
            {RIGHT_ITEMS.map((item) =>
              item.type === "photo" ? (
                <PhotoBox key={item.id} text={item.text} date={item.date} select={memories.includes(item.id)} onClick={() => toggle(item.id)} />
              ) : (
                <TextBox key={item.id} text={item.text} date={item.date} select={memories.includes(item.id)} onClick={() => toggle(item.id)} />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
