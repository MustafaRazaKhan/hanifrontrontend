import { createContext, useContext, useState } from "react";

const Dashboard = createContext();

const DashboardProvider = ({ children }) => {
  const [toggleDashboard, setToggleDashboard] = useState(false);
  const [toggleColor, setToggleColor] = useState(false);
  const [type, setType] = useState("");
  //   ? toggle dashboard
  const handleToggleDashboard = () => {
    setToggleDashboard(!toggleDashboard);
  };
  // todo toggole color
  const handleToggleDashboardColor = () => {
    setToggleColor(!toggleColor);
  };
  //   todo to change active link color
  const handleType = (type) => {
   
    setType(type);
  };
  return (
    <Dashboard.Provider
      value={{
        toggleDashboard,
        handleToggleDashboard,
        type,
        handleType,
        handleToggleDashboardColor,
        toggleColor,
        setType,
      }}
    >
      {children}
    </Dashboard.Provider>
  );
};

const useDashboard = () => {
  return useContext(Dashboard);
};
export { DashboardProvider, useDashboard };
