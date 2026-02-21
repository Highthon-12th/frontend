interface ButtonProps {
  text?: string;
  className?: string;
}

export const Button = ({ text, className }: ButtonProps) => {
  return (
    <div className={`bg-main p-4.5 rounded-[10px] text-center ${className}`}>
      <p className="text-base text-white font-semibold">{text}</p>
    </div>
  );
};
