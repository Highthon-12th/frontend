
import { useState } from "react";
import { InputLabel } from "@shared/ui/inputlabel";
import logo from "@shared/img/logo.svg";
import subtitle from "@shared/img/subtitile.svg";

export const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col items-center px-5 pt-30 pb-10.25 h-full bg-white">
      <div className="flex flex-col items-center gap-2 mb-12">
        <img src={logo} alt="로고" className="h-9" />
        <img src={subtitle} alt="서브타이틀" />
      </div>

      <div className="flex flex-col gap-5 w-full">
        <InputLabel
          label="이메일"
          required
          placeholder="good11@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
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

      <div className="mt-auto flex flex-col gap-3 w-full items-center">
        <button className="text-sm text-light-grey">회원가입</button>
        <button className="flex w-full py-4.5 px-2.5 justify-center items-center gap-2.5 rounded-[10px] bg-main">
          <span className="text-base font-semibold text-white">로그인</span>
        </button>
      </div>
    </div>
  );
};
