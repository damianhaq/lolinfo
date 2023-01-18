import React from "react";
import { Link } from "react-router-dom";
import { navbar } from "../consts";

const Navbar = () => {
  return (
    <div>
      {navbar.map((el) => (
        <Link to={el.routing} key={el.name}>
          {el.name}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
