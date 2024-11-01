import React from "react";
import { Link } from "react-router-dom";

const Button = ({ title }) => {
  return (
    <button
      className="bg-black text-white w-full py-[10px] rounded-sm"
      type="submit"
    >
      {title}
    </button>
  );
};

export default Button;
