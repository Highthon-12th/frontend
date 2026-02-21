import { MemoryFilterTabBar } from "@features/category/ui";
import { ToProfileInfo } from "@features/toProfile/ui";
import { FlatBar } from "@shared/ui/FlatBar";

export const FriendPage = () => {
  return (
    <div>
      <div className="px-5 py-7.5 flex flex-col justify-between w-full gap-5">
        <ToProfileInfo />
        <FlatBar text="기록 추가하기" onClick={() => {}} />
      </div>
      <div className="px-5">
        <MemoryFilterTabBar />
      </div>
    </div>
  );
};
