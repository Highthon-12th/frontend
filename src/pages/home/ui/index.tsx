import { MyProfileInfo } from "@features/myProfile/ui";
import { FlatBar } from "@shared/ui/FlatBar";
import { PersonList } from "@widgets/personList/ui";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="px-5 py-5 flex flex-col w-full gap-5 flex-1">
      <MyProfileInfo />
      <FlatBar
        text="사람 추가하기"
        onClick={() => {
          navigate("/friend/add");
        }}
      />
      <PersonList />
    </div>
  );
};
