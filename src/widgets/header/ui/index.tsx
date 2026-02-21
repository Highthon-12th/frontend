import { useLocation, useNavigate, useParams } from "react-router-dom";
import EditIcon from "@shared/img/eidt.svg?react";
import LeftArrowIcon from "@shared/img/left_arrow.svg?react";
import HeaderLogoIcon from "@shared/img/header-logo.svg?react";
import { usePresentStepStore } from "src/entities/present/stepStore";
import { useRecipientById } from "@shared/api/useRecipientById";

export const HeaderWidghets = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const { step, prev } = usePresentStepStore();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  // 항상 호출
  const { data } = useRecipientById(id!);

  let content = <></>;

  if (pathname === "/") {
    content = (
      <>
        <HeaderLogoIcon />
      </>
    );
  } else if (pathname.includes("/friend/add")) {
    content = (
      <>
        <LeftArrowIcon
          className="absolute"
          onClick={() => {
            navigate("/");
          }}
        />
        <p className="mx-auto text-base font-semibold text-text min-h-6">
          소중한 사람 추가하기
        </p>
      </>
    );
  } else if (pathname.includes("/friend")) {
    content = (
      <>
        <LeftArrowIcon
          className="absolute"
          onClick={() => {
            navigate("/");
          }}
        />
        <p className="mx-auto text-base font-semibold text-text min-h-6">
          {data?.name ?? ""}
        </p>
      </>
    );
  } else if (pathname === "/presentlist") {
    content = (
      <>
        <LeftArrowIcon className="absolute" onClick={() => navigate(-1)} />
        <p className="mx-auto text-base font-semibold text-text">보낸 선물</p>
      </>
    );
  } else if (pathname.includes("/present")) {
    content = (
      <>
        {step === 3 ? (
          <></>
        ) : (
          <LeftArrowIcon
            className="absolute"
            onClick={() => {
              if (step === 1) {
                navigate(-1);
              } else {
                prev();
              }
            }}
          />
        )}
        <p className="mx-auto text-base font-semibold text-text">정성 보내기</p>
      </>
    );
  } else if (pathname.includes("/write")) {
    content = (
      <>
        <LeftArrowIcon
          className="absolute"
          onClick={() => {
            navigate(-1);
          }}
        />
        <p className="mx-auto text-base text-text font-semibold">기록하기</p>
      </>
    );
  } else if (pathname.includes("/receive")) {
    content = (
      <>
        <LeftArrowIcon
          className="absolute"
          onClick={() => {
            navigate("/");
          }}
        />
        <p className="mx-auto text-base text-text font-semibold">미리보기</p>
        <EditIcon className="absolute right-5" />
      </>
    );
  }

  return (
    <header className="relative bg-white px-5 py-3 pt-12.5 flex justify-between items-center shadow-[0_4px_20px_0_rgba(0,0,0,0.04)]">
      {content}
    </header>
  );
};
