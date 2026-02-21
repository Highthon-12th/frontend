import { Button } from "@shared/ui/Button";

interface ButtonButtonWidgetsProps {
  text?: string;
  active?: boolean;
  onClick?: () => void;
}

export const BottomButtonWidgets = ({
  text = "",
  active = true,
  onClick,
}: ButtonButtonWidgetsProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 w-full bg-white px-5 pt-3 pb-5 shadow-[0_-4px_20px_0_rgba(0,0,0,0.04)]">
      <Button
        text={text}
        className="w-full"
        onClick={onClick}
        active={active}
      />
    </div>
  );
};
