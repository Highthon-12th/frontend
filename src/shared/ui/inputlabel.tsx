interface InputLabelProps {
  label: string;
  required?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: React.HTMLInputTypeAttribute;
}

export const InputLabel = ({
  label,
  required,
  placeholder,
  value,
  onChange,
  type = "text",
}: InputLabelProps) => {
  return (
    <div className="flex flex-col w-83.75 items-start gap-2.5">
      <p className="text-base font-medium leading-3.5 text-[#404A67]">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </p>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="self-stretch px-4 py-3 rounded-[10px] border border-[#E7EBF2] bg-white text-sm text-text placeholder:text-light-grey outline-none"
      />
    </div>
  );
};
