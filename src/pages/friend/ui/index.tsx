import { MemoryFilterTabBar } from "@features/category/ui";
import { ToProfileInfo } from "@features/toProfile/ui";
import { FlatBar } from "@shared/ui/FlatBar";
import { BottomButtonWidgets } from "@widgets/bottomButton/ui";

export const FriendPage = () => {
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="px-5 py-5 flex flex-col justify-between w-full gap-2.5">
        <div className="flex flex-col items-start gap-5">
          <ToProfileInfo />
          <FlatBar text="기록 추가하기" onClick={() => {}} />
        </div>
        <div className="py-5">
          <MemoryFilterTabBar />
        </div>
      </div>
      <div>
        <BottomButtonWidgets text="정성 보내기"/>
      </div>
    </div>
  );
};
