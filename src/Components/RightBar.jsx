import React from "react";
import { useDashboard } from "../Context/Dashboard";
import Topbar from "./Topbar";

const RightBar = ({ children }) => {
  const { toggleDashboard } = useDashboard();
  return (
    <div
      className={
        toggleDashboard
          ? " w-[100%]"
          : " w-[60%]  lg:w-[85%] md:w-[70%] sm:w-[70%]"
      }
    >
      <Topbar />
      {children}
    </div>
  );
};

export default RightBar;
