interface ButtonProps {
  text?: string;
  className?: string;
  onClick?: () => void;
}

export const Button = ({ text, className, onClick }: ButtonProps) => {
  return (
    <div className={`bg-main p-4.5 rounded-[10px] text-center ${className}`} onClick={onClick}>
      <p className="text-base text-white font-semibold">{text}</p>
    </div>
  );
};
