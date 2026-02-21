import { useMyInfo } from "@features/myProfile/api/useMyInfo";
import { DetailProfile } from "@shared/ui/DetailProfile";
import { useNavigate } from "react-router-dom";

export const MyProfileInfo = () => {
  const { data } = useMyInfo();
  const navigate = useNavigate();
  return (
    <DetailProfile
      name={data?.name}
      phone={data?.phone}
      sendGift={data?.presentCount}
      person={data?.recipientCount ?? 0}
      src={data?.profileImageUrl}
      giftOnClick={() => navigate(`/presentlist/${data?.id}`)}
    />
  );
};
