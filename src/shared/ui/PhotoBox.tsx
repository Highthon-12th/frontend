interface PhotoBoxProps {
  id?: number;
  text?: string;
  date?: string;
  photo?: string;
  select?: boolean;
  onClick?: () => void;
}

export const PhotoBox = ({ text = "", date = "", photo, select = false, onClick }: PhotoBoxProps) => {
  return (
    <div
      onClick={onClick}
      className={`rounded-[14px] border shadow-[0_0_10px_0_rgba(0,0,0,0.02)] w-full flex flex-col gap-2 p-2.5 cursor-pointer transition-colors ${
        select ? "border-[#1283AF] bg-[#EBF1F5]" : "border-[#E7EBF2] bg-white"
      }`}
    >
      <div className="w-full rounded-lg bg-[#E7EBF2] overflow-hidden">
        {photo ? (
          <img src={photo} alt={text} className="w-full h-auto block" />
        ) : (
          <div className="aspect-square" />
        )}
      </div>
      <div className="flex flex-col gap-0.5 px-1">
        <p className="text-sm font-semibold text-text">{text}</p>
        <p className="text-xs text-light-grey">{date}</p>
      </div>
    </div>
  );
};
