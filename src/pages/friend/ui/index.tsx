import { MemoryFilterTabBar } from "@features/category/ui";
import { ToProfileInfo } from "@features/toProfile/ui";
import { FlatBar } from "@shared/ui/FlatBar";
import { BottomButtonWidgets } from "@widgets/bottomButton/ui";
import { TextBox } from "@shared/ui/Textbox";
import { PhotoBox } from "@shared/ui/PhotoBox";

export const FriendPage = () => {
  return (
    <div className="h-full overflow-y-auto">
      <div className="min-h-full flex flex-col pb-30">
        <div className="px-5 py-5 flex flex-col gap-5">
          <ToProfileInfo />
          <FlatBar text="기록 추가하기" onClick={() => {}} />
        </div>
        <div className="sticky top-0 z-10 bg-white">
          <MemoryFilterTabBar />
        </div>
        <div className="px-5 pt-2.5 flex gap-3.75">
          <div className="flex flex-col gap-3.75 flex-1">
            <PhotoBox
              text="친구의 사진 기록입니다."
              date="2024.01.01"
              photo="src/shared/img/gift_box.svg"
            />
            <TextBox text="친구의 기록을 확인해보세요." date="2024.01.01" />
            <PhotoBox
              text="친구의 사진 기록입니다."
              date="2024.01.01"
              photo="/assets/sample/photo1.png"
            />
          </div>
          <div className="flex flex-col gap-3.75 flex-1">
            <TextBox
              text="친구의 기록을 확인해보세요ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ."
              date="2024.01.01"
            />
            <PhotoBox
              text="친구의 사진 기록입니다."
              date="2024.01.01"
              photo="/assets/sample/photo1.png"
            />
            <PhotoBox
              text="친구의 사진 기록입니다."
              date="2024.01.01"
              photo="/assets/sample/photo1.png"
            />
            <PhotoBox
              text="친구의 사진 기록입니다."
              date="2024.01.01"
              photo="/assets/sample/photo1.png"
            />
          </div>
        </div>
      </div>
      <BottomButtonWidgets text="정성 보내기" />
    </div>
  );
};
