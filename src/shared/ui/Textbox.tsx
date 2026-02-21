interface TextBoxProps {
  id?: number;
  text?: string;
  date?: string;
  category?: string;
  select?: boolean;
}

export const TextBox = ({ id, text = "", date = "", select = false }: TextBoxProps) => {
  return (
    <div className={`rounded-[14px] border border-stroke bg-white shadow-[0_0_10px_0_rgba(0,0,0,0.02)] w-full px-5 py-3 flex flex-col justify-center items-start gap-1.5 ${select ? "border-main" : ""}`}>
      <p className="text-sm font-semibold text-text">{text}</p>
      <p className="text-xs text-light-grey">{date}</p>
    </div>
  );
};
