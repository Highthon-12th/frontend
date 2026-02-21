import { MemoryFilterTabBar } from "@features/category/ui";
import { ToProfileInfo } from "@features/toProfile/ui";
import { BottomButtonWidgets } from "@widgets/bottomButton/ui";
import { useNavigate, useParams } from "react-router-dom";
import { FriendMemories } from "@features/memories/ui";
import { FloatingButton } from "@shared/ui/FloatingButton";

export const FriendPage = () => {
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  return (
    <div className="h-full overflow-y-auto">
      <div className="min-h-full flex flex-col pb-30">
        <div className="px-5 py-5 flex flex-col gap-5">
          <ToProfileInfo />
        </div>
        <div className="sticky top-0 z-10 bg-white">
          <MemoryFilterTabBar />
        </div>
        <FriendMemories id={id} />
      </div>
      <BottomButtonWidgets
        text="정성 보내기"
        onClick={() => {
          navigate(`/present/${id}`);
        }}
      />
      <FloatingButton
        className="right-5 bottom-30"
        onClick={() => {
          navigate(`/write/${id}`);
        }}
      />
    </div>
  );
};
