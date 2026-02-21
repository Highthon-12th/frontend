import PenIcon from "@shared/img/pen.svg?react";
import RightArrowIcon from "@shared/img/right_arrow.svg?react";

interface FlatBarProps {
  text: string;
  onClick: () => void;
}

export const FlatBar = ({ text = "", onClick }: FlatBarProps) => {
  return (
    <div
      className="w-full px-5 py-3 flex justify-between items-center border border-stroke rounded-[14px] bg-white"
      onClick={onClick}
    >
      <div className="flex gap-2.5 items-center">
        <PenIcon />
        <p className="text-sm text-text font-semibold">{text}</p>
      </div>

      <RightArrowIcon />
    </div>
  );
};
