import { Profile } from "@shared/ui/Profile";

export const PersonList = () => {
  return (
    <div className="flex flex-wrap gap-3.75 overflow-y-scroll">
      <Profile name="신권호" memory={6} className="flex-1" />
      <Profile name="신권호" memory={6} className="flex-1" />
      <Profile name="신권호" memory={6} className="flex-1" />
      <Profile name="신권호" memory={6} className="flex-1" />
    </div>
  );
};
