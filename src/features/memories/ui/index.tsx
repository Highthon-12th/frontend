import { PhotoBox } from "@shared/ui/PhotoBox";
import { TextBox } from "@shared/ui/Textbox";
import { useFriendMemories } from "../api/useFriendMemories";

interface FriendMemoriesProps {
  id?: string;
}

export const FriendMemories = ({ id = "" }: FriendMemoriesProps) => {
  const { data } = useFriendMemories(id);

  return (
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
  );
};
