import { Box } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { navbar } from "../consts";

const Navbar = () => {
  return (
    <Box position={"sticky"} top={0} zIndex={10} paddingLeft={"36px"} display={"flex"} alignItems="center" color={"#F9F9F9"} backgroundColor={"#111111"} height={"80px"}>
      {navbar.map((el) => (
        <Box height={"100%"} fontWeight={600} key={el.name}>
          <Link style={{ height: "100%", padding: "0 20px", display: "flex", alignItems: "center" }} to={el.routing}>
            {el.name}
          </Link>
        </Box>
      ))}
    </Box>
  );
};

export default Navbar;
