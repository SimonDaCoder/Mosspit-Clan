import React from "react";
import LinkList from "./linklist";

const MainSection = () => {
  return (
    <div className="main-section flex items-center justify-center flex-col gap-24">
      <img src="/images/mosspit-schriftzug.png" alt="Main Image" className="w-[80vw] object-fit drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]"/>
      < LinkList />
    </div>
  );
};

export default MainSection;