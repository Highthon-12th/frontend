import { useEffect, useState } from "react";
import { usePresentButtonActiveStore } from "src/entities/present/buttonActiveStore";
import { usePresentStore } from "src/entities/present/presentStore";
import { usePresentStepStore } from "src/entities/present/stepStore";
import { SelectButton } from "@widgets/selectButton/ui";
import kakao from "@shared/img/kakao.svg";
import phone from "@shared/img/phone.svg";

type GiftOption = "kakao" | "direct";

export const PresentStep3 = () => {
  const [selected, setSelected] = useState<GiftOption | null>(null);
  const { setActive } = usePresentButtonActiveStore();
  const { setItem, setMomories, setGiftOption, item } = usePresentStore();
  const { reset } = usePresentStepStore();

  const handleReset = () => {
    setSelected(null);
    setItem("");
    setMomories([]);
    setActive(false);
    reset();
  };

  useEffect(() => {
    setActive(selected !== null);
  }, [selected]);

  return (
    <div className="flex flex-col px-5 pt-5 gap-5 min-h-full">
      <div className="flex flex-col gap-2">
        <p className="text-xl font-bold text-text">{item}을 선물할까요?</p>
        <p className="text-sm text-grey font-medium">
          카카오톡 선물하기와 직접 고르기 중 선택하세요
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <SelectButton
          icon={<img src={kakao} alt="카카오 선물하기" className="w-10 h-10" />}
          label="카카오톡 선물하기에서 고를게요"
          select={selected === "kakao"}
          onClick={() => {
            setSelected("kakao");
            setGiftOption("KAKAOTALK");
            window.open("https://gift.kakao.com/home", "_blank");
          }}
        />
        <SelectButton
          icon={<img src={phone} alt="직접 고르기" className="w-10 h-10" />}
          label="따로 직접 고를게요"
          select={selected === "direct"}
          onClick={() => {
            setSelected("direct");
            setGiftOption("ENTER_DIRECTLY");
          }}
        />
      </div>

      <p
        className="mt-auto text-center text-sm text-grey cursor-pointer"
        onClick={handleReset}
      >
        선물을 다시 고르고 싶어요
      </p>
    </div>
  );
};
