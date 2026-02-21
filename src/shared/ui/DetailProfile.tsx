import ProfileIcon from "@shared/img/profile.svg?react";
import GiftBoxIcon from "@shared/img/gift_box.svg?react";
import MemoIcon from "@shared/img/memo.svg?react";
import ManIcon from "@shared/img/man.svg?react";

interface DetailProfileProps {
  name?: string;
  phone?: string;
  sendGift?: number;
  person?: number;
  memo?: number;
}

export const DetailProfile = ({
  name = "",
  phone = "",
  sendGift = 0,
  person,
  memo,
}: DetailProfileProps) => {
  return (
    <div className="w-full p-5 bg-white border border-stroke rounded-[14px] flex flex-col gap-4">
      <div className="w-full flex gap-3">
        <ProfileIcon />
        <div className="flex flex-col gap-2.5 justify-center">
          <p className="text-base text-text font-semibold leading-3.5">
            {name}
          </p>
          <p className="text-[13px] text-grey ">{phone}</p>
        </div>
      </div>
      <div className="flex justify-center gap-25">
        <div className="flex flex-col items-center gap-1">
          <GiftBoxIcon />
          <div className="flex flex-col gap-2 items-center">
            <p className="text-[12px] text-grey leading-3">보낸선물</p>
            <p className="text-[15px] text-text font-semibold leading-3.5">
              {sendGift}번
            </p>
          </div>
        </div>
        {person === undefined ? (
          <>
            <div className="flex flex-col items-center gap-1">
              <MemoIcon />
              <div className="flex flex-col gap-2 items-center">
                <p className="text-[12px] text-grey leading-3">기록</p>
                <p className="text-[15px] text-text font-semibold leading-3.5">
                  {memo}번
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col items-center gap-1">
              <ManIcon />
              <div className="flex flex-col gap-2 items-center">
                <p className="text-[12px] text-grey leading-3">소중한 사람</p>
                <p className="text-[15px] text-text font-semibold leading-3.5">
                  {person}명
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
