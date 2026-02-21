import { MyProfileInfo } from "@features/myProfile/ui";
import { FlatBar } from "@shared/ui/FlatBar";
import { PersonList } from "@widgets/personList/ui";

export const HomePage = () => {
  return (
    <div className="px-5 py-5 flex flex-col justify-between w-full gap-5">
      <MyProfileInfo />
      <FlatBar text="사람 추가하기" onClick={() => {}} />
      <PersonList />
    </div>
  );
};
