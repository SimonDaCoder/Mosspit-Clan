import React from "react";
import { DiscordServerCard } from "./linkcard";

const MainSection = () => {
  return (
    <div className="main-section flex items-center justify-center flex-col gap-8">
      <img src="/images/mosspit-schriftzug.png" alt="Main Image" className="w-full object-fit" />
      < LinkList />
    </div>
  );
};

export default MainSection;