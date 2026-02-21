import { useConvertImgUrl } from "@shared/api/useConvertImgUrl";
import { useRecipientById } from "@shared/api/useRecipientById";
import { ImagePicker } from "@shared/ui/ImagePicker";
import { BottomButtonWidgets } from "@widgets/bottomButton/ui";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSaveRecord } from "../api/useSaveRecord";

const categoryTop = [
  {
    name: "추억",
    value: "MEMORY",
  },
  {
    name: "스포츠",
    value: "SPORTS",
  },
  {
    name: "음악",
    value: "MUSIC",
  },
];
const categoryBottom = [
  {
    name: "패션",
    value: "FASHION",
  },
  {
    name: "컬러",
    value: "COLOR",
  },
  {
    name: "대화",
    value: "TALKING",
  },
];

export const WritePage = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [imgUrl, setImgUrl] = useState<string>("");
  const { id } = useParams<{ id: string }>();
  const profileInfo = useRecipientById(id);
  const { mutate } = useConvertImgUrl({
    onSuccess: (data) => {
      setImgUrl(data.url);
    },
  });
  const saveRecord = useSaveRecord({
    onSuccess: () => {
      navigate(-1);
    },
  });

  return (
    <>
      <div className="p-5 flex flex-col gap-5 flex-1 pb-28">
        <div className="flex flex-col gap-3">
          <p className="text-lg text-text font-semibold">
            <span className="text-main">{profileInfo.data?.name}</span>
            님과의 추억 기록하기
          </p>
          <p className="text-sm leading-3.5 text-grey font-medium">
            카테고리는 한 가지만 선택할 수 있어요
          </p>
        </div>
        <div className="flex flex-col gap-2.5">
          <div className="flex gap-2.5">
            {categoryTop.map((category, idx) => {
              return (
                <label key={idx} className="cursor-pointer">
                  <input
                    name="category"
                    type="radio"
                    value={category.value}
                    className="peer sr-only"
                    onChange={(e) => setSelected(e.target.value)}
                  />

                  <div
                    className="
                    px-3.5 py-2
                    bg-bg
                    border border-stroke
                    rounded-md
                    peer-checked:bg-main
                    peer-checked:border-main
                    transition-colors
                    text-grey
                    peer-checked:text-white
                    "
                  >
                    <span className="text-sm font-medium">{category.name}</span>
                  </div>
                </label>
              );
            })}
          </div>
          <div className="flex gap-2.5">
            {categoryBottom.map((category, idx) => {
              return (
                <label key={idx} className="cursor-pointer">
                  <input
                    name="category"
                    type="radio"
                    value={category.value}
                    className="peer sr-only"
                    onChange={(e) => setSelected(e.target.value)}
                  />

                  <div
                    className="
                    px-3.5 py-2
                    bg-bg
                    border border-stroke
                    rounded-md
                    peer-checked:bg-main
                    peer-checked:border-main
                    transition-colors
                    text-grey
                    peer-checked:text-white
                    "
                  >
                    <span className="text-sm font-medium">{category.name}</span>
                  </div>
                </label>
              );
            })}
          </div>
        </div>
        <textarea
          className="w-full p-4 text-sm font-medium text-text h-25 bg-white border border-stroke rounded-[10px] focus:border-stroke outline-none placeholder:text-light-grey"
          placeholder="핸드폰 케이스, 무드등, 가방 등"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        {imgUrl || imgUrl !== "" ? (
          <div
            className="rounded-xl border border-stroke overflow-hidden"
            onClick={() => {
              setImgUrl("");
            }}
          >
            <img src={imgUrl} />
          </div>
        ) : (
          <>
            <ImagePicker
              onChange={(e) => {
                const file = e.target.files?.[0];
                mutate(file!);
              }}
            />
          </>
        )}
      </div>
      <BottomButtonWidgets
        text="기록하기"
        active={selected !== "" && text !== "" && imgUrl !== ""}
        onClick={() => {
          saveRecord.mutate({
            recipientId: parseInt(id!),
            category: selected,
            content: text,
            imageUrl: imgUrl,
          });
        }}
      />
    </>
  );
};
