import { Box, Text } from "@chakra-ui/react";
import React from "react";
import ArticleCard from "./ArticleCard";

const ChampionsHeader = () => {
  return (
    <Box paddingBottom={"60px"} position={"relative"}>
      <Box position={"absolute"} zIndex={"-1"} top="0" width={"100%"} height={295} backgroundColor={"#F8F8F8"}></Box>
      <Box display={"flex"} alignItems={"center"} padding={"20px 0"} height={200}>
        <Text
          letterSpacing={"0.2rem"}
          fontSize={"10px"}
          textTransform={"uppercase"}
          transformOrigin={"center"}
          fontWeight={"600"}
          transform={"rotate(-90deg)"}
          display={"flex"}
          alignItems={"center"}
          _after={{ content: "''", height: "1px", width: "15px", backgroundColor: "black", display: "inline-block" }}
        >
          highligts
        </Text>

        <ArticleCard />
      </Box>
      <Box padding={"10px 0"} margin="0 auto" textAlign={"center"}>
        <Text fontWeight={600} fontStyle={"italic"} fontSize={24}>
          CHOOSE YOUR
        </Text>
        <Text paddingBottom={5} fontStyle={"italic"} lineHeight={"0.7em"} fontWeight={900} fontSize={105}>
          CHAMPION
        </Text>
        <Text width={"70%"} margin="0 auto" fontSize={14}>
          With more than 140 champions, you’ll find the perfect match for your playstyle. Master one, or master them all.
        </Text>
      </Box>
    </Box>
  );
};

export default ChampionsHeader;
