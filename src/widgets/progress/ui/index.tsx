import { usePresentStepStore } from "src/entities/present/stepStore";

export const ProgressWidgets = () => {
  const length = 3;
  const { step } = usePresentStepStore();

  const width = `${(step / length) * 100}%`;
  return (
    <div className="w-full flex flex-col">
      <div className="w-full bg-light-grey h-2">
        <div
          className={`h-full bg-main transition-width duration-200 ease-out`}
          style={{ width }}
        ></div>
      </div>
      <div className="p-5">
        <p className="text-base text-light-grey font-medium ">
          {step}/{length}
        </p>
      </div>
    </div>
  );
};
