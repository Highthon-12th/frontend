import { useLocation, useNavigate } from "react-router-dom";
import Bell from "@shared/img/bell.svg?react";
import LeftArrowIcon from "@shared/img/left_arrow.svg?react";
import { usePresentStepStore } from "src/entities/present/stepStore";

export const HeaderWidghets = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const { step, prev } = usePresentStepStore();
  const navigate = useNavigate();

  let content = <></>;

  if (pathname === "/") {
    content = (
      <>
        <p className="text-base text-main font-bold">로고</p>
        <Bell />
      </>
    );
  } else if (pathname === "/friend") {
    content = (
      <>
        <LeftArrowIcon className="absolute" />
        <p className="mx-auto text-base text-text font-semibold">이름</p>
      </>
    );
  } else if (pathname === "/present") {
    content = (
      <>
        {step === 3 ? (
          <></>
        ) : (
          <LeftArrowIcon
            className="absolute"
            onClick={() => {
              if (step === 1) {
                navigate("friend");
              } else {
                prev();
              }
            }}
          />
        )}
        <p className="mx-auto text-base text-text font-semibold">정성 보내기</p>
      </>
    );
  }

  return (
    <header className="bg-white px-5 py-3 pt-12.5 flex justify-between items-center shadow-[0_4px_20px_0_rgba(0,0,0,0.04)]">
      {content}
    </header>
  );
};
