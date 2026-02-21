import WhitePlusIcon from "@shared/img/white-plus.svg?react";

interface FloatingButtonProps {
  className?: string;
  onClick: () => void;
}

export const FloatingButton = ({
  className = "",
  onClick,
}: FloatingButtonProps) => {
  return (
    <div
      className={`bg-main px-5 py-3.5 flex gap-1.5 ${className} rounded-[90px] absolute items-center`}
      onClick={onClick}
    >
      <WhitePlusIcon />
      <p className="text-sm text-white font-semibold leading-[150%]">
        기록하기
      </p>
    </div>
  );
};
