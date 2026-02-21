import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "@pages/home";
import "./index.css";
import { HeaderWidghets } from "@widgets/header";

export const RouterProvider = () => {
  return (
    <BrowserRouter>
      <HeaderWidghets />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};
