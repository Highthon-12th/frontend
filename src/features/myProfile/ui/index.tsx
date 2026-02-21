import { useMyInfo } from "@features/myProfile/api/useMyInfo";
import { DetailProfile } from "@shared/ui/DetailProfile";

export const MyProfileInfo = () => {
  const { data } = useMyInfo();
  return (
    <DetailProfile
      name={data?.name}
      phone={data?.phone}
      sendGift={data?.presentCount}
      person={data?.recipientCount ?? 0}
      src={data?.profileImageUrl}
    />
  );
};
