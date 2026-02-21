import { FlatBar } from "@shared/ui/FlatBar";
import { PersonList } from "@widgets/personList/ui";

export const HomePage = () => {
  return (
    <div className="px-5 py-7.5 flex flex-col justify-between w-full gap-5">
      <FlatBar text="사람 추가하기" onClick={() => {}} />
      <PersonList />
    </div>
  );
};
