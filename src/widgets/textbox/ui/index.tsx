interface TextBoxProps {
  children?: React.ReactNode;
}

export const TextBox = ({ children }: TextBoxProps) => {
  return (
    <div className="rounded-[14px] border border-stroke bg-white shadow-[0_0_10px_0_rgba(0,0,0,0.02)]">
      {children}
    </div>
  );
};
