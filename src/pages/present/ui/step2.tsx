export const PresentStep2 = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-col px-5 gap-3">
        <div className="flex justify-between">
          <p className="text-lg text-text font-semibold">
            <span className="text-main">이름</span>
            에게 보내고 싶은 선물이 있나요?
          </p>
          <p className="text-lg text-main font-semibold">0/10</p>
        </div>
        <p className="text-[14px] text-grey font-medium leading-3.5">
          한 번에 한 품목만 작성 할 수 있어요
        </p>
      </div>
      <div className="py-7.5 px-5"></div>
    </div>
  );
};
