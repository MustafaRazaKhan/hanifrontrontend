import React from "react";
import LeftBar from "../../Components/LeftBar";
import RightBar from "../../Components/RightBar";

const Dashboard = () => {
  return (
    <div className="flex w-full min-h-screen">
      <LeftBar />
      <RightBar></RightBar>
    </div>
  );
};

export default Dashboard;
