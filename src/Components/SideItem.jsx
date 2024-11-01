import React from "react";
import { Link } from "react-router-dom";

const SideItem = ({ icon, link, name }) => {
  return (
    <Link to={`/${link}`}>
      <div className="p-2 flex items-center gap-2 text-[16px]">
        <div className="text-[21px] text-gray-500">{icon}</div>
        <div className="">{name}</div>
      </div>
    </Link>
  );
};

export default SideItem;
