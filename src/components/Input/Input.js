import React from "react";

const Input = ({ placeholder, onChange, type,value }) => {
  return (
    <>
      <input
        className="w-full border-2 px-4 py-2 rounded-lg focus:border-blue-500 active:border-blue-500"
        placeholder={`${placeholder}`}
        onChange={onChange}
        type={type}
        value={value}
      />
    </>
  );
};

export default Input;
