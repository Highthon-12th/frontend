import ProfileIcon from "@shared/img/profile.svg?react";
import { useNavigate } from "react-router-dom";

interface ProfileProps {
  name?: string;
  memory?: number;
  className?: string;
  src?: string;
  id: number;
}

export const Profile = ({
  name = "",
  memory = 0,
  className = "",
  src,
  id,
}: ProfileProps) => {
  const navigate = useNavigate();
  return (
    <div
      className={`bg-white rounded-[14px] border border-stroke flex flex-col items-center justify-center gap-5 p-7.5 ${className}`}
      onClick={() => {
        navigate(`/friend/${id}`);
      }}
    >
      {src ? (
        <img src={src} alt="profile" className="w-11.5 h-11.5" />
      ) : (
        <ProfileIcon />
      )}
      <div className="flex flex-col items-center gap-2.5">
        <p className="text-base text-text font-semibold leading-3.5">{name}</p>
        <p className="text-[13px] text-grey">함께한 추억 {memory}</p>
      </div>
    </div>
  );
};
