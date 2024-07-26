import React from "react";
import { String } from "../../data";

const Navbar = () => {
  return (
    <>
      <header>
        <h1 className="text-2xl h-20 bg-blue-600 text-white uppercase px-5 py-5">
          {String.titleName}
        </h1>
      </header>
    </>
  );
};

export default Navbar;
