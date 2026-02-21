export { FilterBar } from "./FilterBar";
export type { FilterOption } from "./FilterBar";

interface ListItemProps {
  title: string;
  date: string;
  badge?: string;
  buyLabel?: string;
  onBuy?: () => void;
}

export const ListItem = ({ title, date, badge, buyLabel, onBuy }: ListItemProps) => {
  if (buyLabel) {
    return (
      <div className="flex flex-col w-full pt-5 px-4 pb-4 items-start gap-2.5 rounded-[10px] border border-[#E7EBF2] bg-[#F6F6F6]">
        <div className="flex flex-col gap-1">
          <p className="text-base font-bold text-text">{title}</p>
          <p className="text-sm text-light-grey">{date}</p>
        </div>
        <button
          onClick={onBuy}
          className="w-full py-3.5 bg-[#EBEBEB] text-grey text-sm font-semibold rounded-[10px]"
        >
          {buyLabel}
        </button>
      </div>
    );
  }

  return (
    <div className="flex w-full p-4 justify-between items-start rounded-[10px] border border-[#E7EBF2] bg-white">
      <div className="flex flex-col gap-1">
        <p className="text-base font-bold text-text">{title}</p>
        <p className="text-sm text-light-grey">{date}</p>
      </div>
      {badge && (
        <span className="flex px-2 py-1.25 justify-center items-center gap-1 rounded-sm bg-[#EBF1F5] text-xs font-semibold text-grey">
          {badge}
        </span>
      )}
    </div>
  );
};
