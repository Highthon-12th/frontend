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
    <div className="w-full bg-white px-5 py-3 shadow-[0_-4px_20px_0_rgba(0,0,0,0.04)">
      <Button text={text} className="w-full" />
    </div>
  );
};
