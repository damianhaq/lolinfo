import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Champion = ({ data }) => {
  return (
    <Box
      position={"relative"}
      width={308}
      height={560}
      backgroundPosition={"center"}
      backgroundImage={`url(http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${data.id}_0.jpg)`}
    >
      <Box
        position={"absolute"}
        bottom={"0"}
        left={"0"}
        width="100%"
        height={"52px"}
        display="flex"
        alignItems={"center"}
        color={"white"}
        backgroundColor={"#061C25"}
        paddingLeft="19px"
        fontSize={"2xl"}
      >
        <p>{data.name}</p>
      </Box>
    </Box>
  );
};

export default Champion;
