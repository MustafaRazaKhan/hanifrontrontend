import React from "react";

const InputField = ({ name, placeholder, onChange, value, type }) => {
  return (
    <input
      className="w-full border-[2px] border-black py-[7px] px-10 rounded-sm"
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={type === "file" ? undefined : value} // For file inputs, don't set `value`
      type={type}
      // Conditional attributes for file input
      {...(type === "file" ? { multiple: true, accept: "image/*" } : {})}
    />
  );
};

export default InputField;
