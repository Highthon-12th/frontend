import { Profile } from "@shared/ui/Profile";

export const PersonList = () => {
  return (
    <div className="flex flex-wrap gap-3.75">
      <Profile name="신권호" phone="010-1111-1111" className="flex-1" />
      <Profile name="신권호" phone="010-1111-1111" className="flex-1" />
      <Profile name="신권호" phone="010-1111-1111" className="flex-1" />
      <Profile name="신권호" phone="010-1111-1111" className="flex-1" />
    </div>
  );
};
