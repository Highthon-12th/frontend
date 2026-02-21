interface TextBoxProps {
  id?: number;
  text?: string;
  date?: string;
  category?: string;
  select?: boolean;
  onClick?: () => void;
}

export const TextBox = ({ text = "", date = "", select = false, onClick }: TextBoxProps) => {
  return (
    <div
      onClick={onClick}
      className={`rounded-[14px] border shadow-[0_0_10px_0_rgba(0,0,0,0.02)] w-full px-5 py-3 flex flex-col justify-center items-start gap-1.5 cursor-pointer transition-colors ${
        select ? "border-[#1283AF] bg-[#EBF1F5]" : "border-stroke bg-white"
      }`}
    >
      <p className="text-sm font-semibold text-text">{text}</p>
      <p className="text-xs text-light-grey">{date}</p>
    </div>
  );
};
