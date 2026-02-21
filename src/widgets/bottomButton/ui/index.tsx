import { Button } from "@shared/ui/Button";

interface ButtonButtonWidgetsProps {
  text?: string;
  onClick?: () => void;
}

export const BottomButtonWidgets = ({
  text = "",
  onClick,
}: ButtonButtonWidgetsProps) => {
  return (
    <div className="w-full bg-white px-5 py-3">
      <Button text={text} className="w-full" onClick={onClick} />
    </div>
  );
};
