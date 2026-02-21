import { type ReactNode } from "react";

interface SelectButtonProps {
  icon: ReactNode;
  label: string;
  select?: boolean;
  onClick?: () => void;
}

export const SelectButton = ({ icon, label, select = false, onClick }: SelectButtonProps) => {
  return (
    <div
      onClick={onClick}
      className={`flex w-full h-23.5 px-5 py-3 items-center gap-3 rounded-[14px] cursor-pointer transition-colors border ${
        select ? "border-[#1283AF] bg-[#EBF1F5]" : "border-[#E7EBF2] bg-[#FDFDFD]"
      }`}
    >
      {icon}
      <p className="text-base font-semibold text-text">{label}</p>
    </div>
  );
};
