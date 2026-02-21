import { useState } from "react";
import { BottomButtonWidgets } from "@widgets/bottomButton/ui";
import { ProgressWidgets } from "@widgets/progress/ui";
import { Modal } from "@widgets/modal/ui";
import { usePresentStepStore } from "src/entities/present/stepStore";
import { usePresentStore } from "src/entities/present/presentStore";
import { PresentStep1 } from "./step1";
import { PresentStep2 } from "./step2";
import { PresentStep3 } from "./step3";
import { usePresentButtonActiveStore } from "src/entities/present/buttonActiveStore";

export const PresentPage = () => {
  const { step, next } = usePresentStepStore();
  const { active } = usePresentButtonActiveStore();
  const { giftOption } = usePresentStore();
  const [modalOpen, setModalOpen] = useState(false);

  let StepLayout = <PresentStep1 />;

  if (step === 1) {
    StepLayout = <PresentStep1 />;
  } else if (step === 2) {
    StepLayout = <PresentStep2 />;
  } else if (step === 3) {
    StepLayout = <PresentStep3 />;
  }

  const handleNext = () => {
    if (step === 3 && giftOption === "direct") {
      setModalOpen(true);
    } else {
      next();
    }
  };

  return (
    <div className="h-full flex flex-col">
      <ProgressWidgets />
      <div className="flex-1 overflow-y-auto pb-28">
        {StepLayout}
      </div>
      <BottomButtonWidgets text="다음" onClick={handleNext} active={active} />
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-lg font-bold text-text">
            <span className="text-main">신권호</span>님에게 선물을 보내셨나요?
          </p>
          <p className="text-sm text-grey font-medium leading-5">
            소중한 사람에게 보낼 정성을 만들었어요!<br />공유하기 전에 확인해 볼까요?
          </p>
        </div>
        <button
          className="w-full bg-main text-white font-semibold text-base py-4 rounded-[10px]"
          onClick={() => setModalOpen(false)}
        >
          확인하기
        </button>
      </Modal>
    </div>
  );
};
