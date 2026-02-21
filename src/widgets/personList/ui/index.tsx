import { Profile } from "@shared/ui/Profile";
import { useRecipients } from "@widgets/personList/api/useRecipients";

export const PersonList = () => {
  const { data } = useRecipients();
  return (
    <div className="grid grid-cols-2 gap-3.75 overflow-y-scroll">
      {data?.map((recipient, idx) => {
        return (
          <Profile
            name={recipient.name}
            memory={recipient.records}
            id={recipient.id}
            key={idx}
          />
        );
      })}
    </div>
  );
};
