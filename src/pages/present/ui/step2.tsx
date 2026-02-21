import { TextBox } from "@shared/ui/Textbox";
import { PhotoBox } from "@shared/ui/PhotoBox";

export const PresentStep2 = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-col px-5 gap-3 pb-5">
        <div className="flex justify-between">
          <p className="text-lg text-text font-semibold">
            <span className="text-main">이름</span>
            에게 보내고 싶은 선물이 있나요?
          </p>
          <p className="text-lg text-main font-semibold">0/10</p>
        </div>
        <p className="text-[14px] text-grey font-medium leading-3.5">
          한 번에 한 품목만 작성 할 수 있어요
        </p>
      </div>
      <div className="px-5 pt-2.5 flex gap-3.75">
        <div className="flex flex-col gap-3.75 flex-1">
          <PhotoBox text="친구의 사진 기록입니다." date="2024.01.01" />
          <TextBox text="친구의 기록을 확인해보세요." date="2024.01.01" />
          <PhotoBox text="친구의 사진 기록입니다." date="2024.01.01" />
        </div>
        <div className="flex flex-col gap-3.75 flex-1">
          <TextBox text="친구의 기록을 확인해보세요." date="2024.01.01" />
          <PhotoBox text="친구의 사진 기록입니다." date="2024.01.01" />
          <PhotoBox text="친구의 사진 기록입니다." date="2024.01.01" />
        </div>
      </div>
    </div>
  );
};
