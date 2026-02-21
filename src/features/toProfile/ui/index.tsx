import { DetailProfile } from "@shared/ui/DetailProfile";
import { useParams } from "react-router-dom";
import { useRecipientById } from "@shared/api/useRecipientById";

export const ToProfileInfo = () => {
  const { id } = useParams<{ id: string }>();

  const { data } = useRecipientById(id!);

  return (
    <DetailProfile
      name={data?.name}
      phone={data?.phone}
      sendGift={data?.presents}
      memo={data?.records}
    />
  );
};
