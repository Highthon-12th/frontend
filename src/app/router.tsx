import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "@pages/home/ui";
import { FriendPage } from "@pages/friend/ui";
import "./index.css";
import { HeaderWidghets } from "@widgets/header/ui";

export const RouterProvider = () => {
  return (
    <BrowserRouter>
      <HeaderWidghets />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/friend" element={<FriendPage />} />
      </Routes>
    </BrowserRouter>
  );
};
