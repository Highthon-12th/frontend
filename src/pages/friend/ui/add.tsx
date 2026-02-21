import { Input } from "@widgets/input/ui";
import Profile from "@shared/img/profile.png";
import CameraSVG from "@shared/img/camera.svg";
import PlusSVG from "@shared/img/plus.svg";
import { useState } from "react";
import { useConvertImgUrl } from "@shared/api/useConvertImgUrl";
import { useAddFriend } from "../api/useAddFriend";
import { useNavigate } from "react-router-dom";

export const AddFriendPage = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [profileImg, setProfileImg] = useState<string | null>(null);
  const navigate = useNavigate();

  const { mutateAsync: convertImgUrl } =
    useConvertImgUrl();

    const {mutateAsync: addFriend} = useAddFriend();

  const handleAddFriend = async () => {
    await addFriend({
        name,
        phone,
        profileImg: profileImg || undefined
    })
    navigate("/");
  };

  const handleProfileChange =  async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
        const uploadedFile = await convertImgUrl(file);
        setProfileImg(uploadedFile.url);
    }
  };

  const isFormValid = name.trim() !== "" && phone.trim() !== "";

  return (
    <div className="flex flex-col h-full px-6 bg-bg">
      <div className="flex flex-col gap-2 pt-8 pb-8">
        <span className="text-xl font-bold text-text">
          소중한 사람을 추가해요
        </span>
        <span className="text-sm font-light text-grey">
          정성을 담아 선물할 사람을 추가해보세요
        </span>
      </div>

      <div className="flex flex-col gap-6">
        <Input
          label="이름"
          required
          placeholder="홍길동"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          label="전화번호"
          required
          placeholder="010-1234-5678"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <div className="flex items-center gap-4 pt-8">
        <div className="w-24 h-24 rounded-full bg-[#E2E6EE] flex items-center justify-center shrink-0 overflow-hidden">
          <img src={profileImg || Profile} />
        </div>

        <label
          htmlFor="profile-input"
          className="flex items-center justify-between flex-1 px-5 py-4 bg-white border cursor-pointer border-stroke rounded-xl"
        >
          <div className="flex items-center gap-2">
            <img src={CameraSVG} alt="Camera" />
            <span className="font-medium text-text text-[14px]">
              사진 추가하기
            </span>
          </div>
          <img src={PlusSVG} alt="Plus" />
        </label>
        <input
          type="file"
          className="hidden"
          id="profile-input"
          accept="image/*"
          onChange={handleProfileChange}
        />
      </div>

      <div className="pb-8 mt-auto">
        <button
          className={`w-full py-4 text-base font-medium rounded-2xl ${isFormValid ? "bg-main text-white" : "bg-[#EBEBEB] text-[#B6BAC8]"}`}
          onClick={handleAddFriend}
          disabled={!isFormValid}
        >
          추가하기
        </button>
      </div>
    </div>
  );
};
