import { BottomButtonWidgets } from "@widgets/bottomButton/ui";
import { ProgressWidgets } from "@widgets/progress/ui";
import { usePresentStepStore } from "src/entities/present/stepStore";
import { PresentStep1 } from "./step1";
import { PresentStep2 } from "./step2";
import { PresentStep3 } from "./step3";
import { usePresentButtonActiveStore } from "src/entities/present/buttonActiveStore";

export const PresentPage = () => {
  const { step, next } = usePresentStepStore();

  const { active } = usePresentButtonActiveStore();

  let StepLayout = <PresentStep1 />;

  if (step === 1) {
    StepLayout = <PresentStep1 />;
  } else if (step === 2) {
    StepLayout = <PresentStep2 />;
  } else if (step === 3) {
    StepLayout = <PresentStep3 />;
  }

  return (
    <div className="h-full flex flex-col">
      <ProgressWidgets />
      <div className="flex-1 overflow-y-auto pb-28">
        {StepLayout}
      </div>
      <BottomButtonWidgets text="다음" onClick={next} active={active} />
    </div>
  );
};
