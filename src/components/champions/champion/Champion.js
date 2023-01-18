import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Champion = ({ data }) => {
  return (
    <Box width={250} overflow={"hidden"} height={280} position={"relative"}>
      <Box
        position={"absolute"}
        top={"-20px"}
        left={"-20px"}
        width={308}
        height={560}
        backgroundPosition={"center"}
        backgroundImage={`url(http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${data.id}_0.jpg)`}
      ></Box>
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
      <Box top={-3} right={-3} position={"absolute"} transform={"rotate(45deg)"} width={6} height={6} backgroundColor={"white"}></Box>
    </Box>
  );
};

export default Champion;
