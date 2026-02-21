import Bell from "@shared/img/bell.svg?react";

export const HeaderWidghets = () => {
  return (
    <header className="bg-white px-5 py-3 flex justify-between items-center shadow-[0_0_20px_0_rgba(0,0,0,0.04)]">
      <p className="text-base text-main font-bold">로고</p>
      <Bell />
    </header>
  );
};
