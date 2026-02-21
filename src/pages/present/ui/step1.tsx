import { useEffect, useRef } from "react";
import { usePresentButtonActiveStore } from "src/entities/present/buttonActiveStore";
import { usePresentStore } from "src/entities/present/presentStore";

export const PresentStep1 = () => {
  const { setActive } = usePresentButtonActiveStore();
  const { setItem, item } = usePresentStore();
  const textareaRef = useRef<null | HTMLTextAreaElement>(null);

  const onTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    setItem(value);
    if (value.trim().length === 0) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  useEffect(() => {
    if (item === "") {
      setActive(false);
    } else {
      setActive(true);
    }

    if (textareaRef.current != null) {
      textareaRef.current.focus();
      textareaRef.current.setSelectionRange(item.length, item.length);
    }
  }, []);

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-col px-5 gap-3">
        <p className="text-lg text-text font-semibold">
          <span className="text-main">이름</span>
          에게 보내고 싶은 선물이 있나요?
        </p>
        <p className="text-[14px] text-grey font-medium leading-3.5">
          한 번에 한 품목만 작성 할 수 있어요
        </p>
      </div>
      <div className="py-7.5 px-5">
        <textarea
          className="w-full border border-stroke bg-white rounded-[10px] p-4 text-[14px] font-medium focus:border-stroke outline-none"
          placeholder="핸드폰 케이스, 무드등, 가방 등"
          onChange={onTextareaChange}
          value={item}
          ref={textareaRef}
        ></textarea>
      </div>
    </div>
  );
};
