import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ChampionCard = ({ data }) => {
  return (
    <Link to={`/champions/${data.id}`}>
      <Box role={"group"} transitionDuration="0.3s" width={220} overflow={"hidden"} height={300} position={"relative"}>
        <Box
          position={"absolute"}
          top={"-25px"}
          left={"-20px"}
          width={308}
          height={560}
          backgroundPosition={"center"}
          backgroundImage={`url(http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${data.id}_0.jpg)`}
          _groupHover={{ transform: "scale(0.97)" }}
          transitionDuration="0.3s"
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
          _groupHover={{ backgroundColor: "#006680", paddingLeft: "30px" }}
          transitionDuration="0.3s"
        >
          <Text>{data.name}</Text>
        </Box>
        <Box
          top={-3}
          right={-3}
          transitionDuration="0.3s"
          _groupHover={{ right: -6, top: -6 }}
          position={"absolute"}
          transform={"rotate(45deg)"}
          width={6}
          height={6}
          backgroundColor={"white"}
        ></Box>
      </Box>
    </Link>
  );
};

export default ChampionCard;
