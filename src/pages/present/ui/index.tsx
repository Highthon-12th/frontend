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
import { useParams } from "react-router-dom";
import { useSavePresent } from "../api/useSavePresent";
import { useUpdatePresnetSent } from "@shared/api/useUpdatePresentSent";

export const PresentPage = () => {
  const { step, next, reset } = usePresentStepStore();
  const { active } = usePresentButtonActiveStore();
  const { giftOption, item, memories, setItem, setMomories, setGiftOption } =
    usePresentStore();
  const [modalOpen, setModalOpen] = useState(false);
  const { id = "" } = useParams<{ id: string }>();
  const { mutate, data, isSuccess } = useSavePresent({
    onSuccess: () => {
      setModalOpen(true);
    },
  });
  const updatePresnetSent = useUpdatePresnetSent({
    onSuccess: () => {
      // navigate
    },
  });

  let StepLayout = <PresentStep1 />;

  if (step === 1) {
    StepLayout = <PresentStep1 />;
  } else if (step === 2) {
    StepLayout = <PresentStep2 id={id} />;
  } else if (step === 3) {
    StepLayout = <PresentStep3 />;
  }

  const handleNext = () => {
    if (step === 3 && giftOption) {
      mutate({
        name: item,
        type: giftOption!,
        recipientId: parseInt(id),
        selectedRecordIds: memories,
      });
    } else {
      next();
    }
  };

  return (
    <div className="h-full flex flex-col">
      <ProgressWidgets />
      <div className="flex-1 overflow-y-auto pb-28">{StepLayout}</div>
      <BottomButtonWidgets text="다음" onClick={handleNext} active={active} />
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-lg font-bold text-text">
            <span className="text-main">신권호</span>님에게 선물을 보내셨나요?
          </p>
          <p className="text-sm text-grey font-medium leading-5">
            소중한 사람에게 보낼 정성을 만들었어요!
            <br />
            공유하기 전에 확인해 볼까요?
          </p>
        </div>
        <div className="flex w-full gap-3">
          <button
            className="flex-1 bg-stroke text-grey font-semibold text-base py-4 rounded-[10px]"
            onClick={() => {
              setModalOpen(false);

              setItem("");
              setMomories([]);
              setGiftOption(null);
              reset();
            }}
          >
            아직이에요
          </button>
          <button
            className="flex-1 bg-main text-white font-semibold text-base py-4 rounded-[10px]"
            onClick={() => {
              setModalOpen(false);

              if (isSuccess) {
                updatePresnetSent.mutate(data.id);
              }
            }}
          >
            확인하기
          </button>
        </div>
      </Modal>
    </div>
  );
};
