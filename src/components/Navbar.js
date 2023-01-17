import React from "react";
import { navbarNames } from "../consts";

const Navbar = () => {
  return (
    <div>
      {navbarNames.map((el) => (
        <a key={el}>{el}</a>
      ))}
    </div>
  );
};

export default Navbar;
