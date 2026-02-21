import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputLabel } from "@shared/ui/inputlabel";
import { Button } from "@shared/ui/Button";
import ProfileIcon from "@shared/img/profile.svg?react";
import CameraIcon from "@shared/img/camera.svg?react";
import logo from "@shared/img/logo.svg";


export const SignupPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col items-center px-5 pt-8 pb-10.25 h-full overflow-y-auto bg-white">
      <img src={logo} alt="로고" className="mb-12.5 h-9" />

      <div className="flex flex-col gap-5 w-full">
        <InputLabel
          label="이름"
          required
          placeholder="홍길동"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputLabel
          label="이메일"
          required
          placeholder="good11@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <InputLabel
          label="전화번호"
          required
          placeholder="010-1234-5678"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="tel"
        />
        <InputLabel
          label="비밀번호"
          required
          placeholder="1~8글자 영문"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </div>

      <div className="flex items-center gap-4 mt-8 w-full">
        <div className="w-22.5 h-22.5 rounded-full bg-[#D9D9D9] flex items-center justify-center shrink-0">
          <ProfileIcon className="w-22.5 h-22.5 text-[#AEAEAE]" />
        </div>
        <button className="flex items-center justify-between px-5 py-3 rounded-[14px] border border-[#E7EBF2] bg-white flex-1">
          <div className="flex items-center gap-2">
            <CameraIcon className="w-5 h-5" />
            <span className="text-base font-semibold text-text">사진 추가하기</span>
          </div>
          <span className="text-base font-semibold text-text">+</span>
        </button>
      </div>

      <button onClick={() => navigate("/signin")} className="mt-8 text-sm text-light-grey">로그인</button>

      <div className="mt-auto pt-3 w-full">
        <Button text="회원가입" onClick={() => navigate("/signin")} />
      </div>
    </div>
  );
};
