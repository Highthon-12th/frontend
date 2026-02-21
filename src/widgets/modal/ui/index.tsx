import { type ReactNode } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children?: ReactNode;
}

export const Modal = ({ open, onClose, children }: ModalProps) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-83.75 rounded-2xl bg-white flex flex-col items-center gap-5 px-5 pt-7.5 pb-5">
        {children}
      </div>
    </div>
  );
};
