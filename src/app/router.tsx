import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "@pages/home/ui";
import { FriendPage } from "@pages/friend/ui";
import "./index.css";
import { HeaderWidghets } from "@widgets/header/ui";
import { PresentPage } from "@pages/present/ui";

export const RouterProvider = () => {
  return (
    <BrowserRouter>
      <HeaderWidghets />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/friend/:id" element={<FriendPage />} />
        <Route path="/present/:id" element={<PresentPage />} />
      </Routes>
    </BrowserRouter>
  );
};
