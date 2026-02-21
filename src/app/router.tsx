import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "@pages/home/ui";
import { FriendPage } from "@pages/friend/ui";
import "./index.css";
import { HeaderWidghets } from "@widgets/header/ui";
import { PresentPage } from "@pages/present/ui";
import { ReceivePage } from "@pages/receive/ui";
import { PresentListPage } from "@pages/presentList/ui";
import { SignupPage } from "@pages/signup/ui";
import { SigninPage } from "@pages/signin/ui";

export const RouterProvider = () => {
  return (
    <BrowserRouter>
      <HeaderWidghets />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/friend/:id" element={<FriendPage />} />
        <Route path="/present" element={<PresentPage />} />
        <Route path="/receive/:encodedPresentId" element={<ReceivePage />} />
        <Route path="/present/:id" element={<PresentPage />} />
        <Route path="/presentlist" element={<PresentListPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
      </Routes>
    </BrowserRouter>
  );
};
