interface ButtonProps {
  text?: string;
  className?: string;
  active?: boolean;
  onClick?: () => void;
}

export const Button = ({
  text,
  className,
  onClick,
  active = true,
}: ButtonProps) => {
  return (
    <div
      className={`bg-main p-4.5 rounded-[10px] text-center transition-background duration-150 ease-in ${className} ${
        active ? "bg-main" : "bg-stroke"
      }`}
      onClick={onClick}
    >
      <p
        className={`text-base  font-semibold transition-color duration-150 ease-in ${
          active ? "text-white" : "text-light-grey"
        }`}
      >
        {text}
      </p>
    </div>
  );
};
