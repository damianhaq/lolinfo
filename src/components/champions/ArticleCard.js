import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const ArticleCard = () => {
  return (
    <Flex role={"group"} alignItems={"center"} border={"1px solid #ACACAC"} width={"600px"} height={"150px"}>
      <Box
        _before={{ left: "-1px", position: "absolute", zIndex: "1", display: "inline-block", content: "''", height: "100%", width: "1px", backgroundColor: "#ACACAC" }}
        pos={"relative"}
        height={"128px"}
        width={"219px"}
        flexShrink={"0"}
      >
        <Box
          pos={"absolute"}
          left={"-10px"}
          top={"0"}
          background={
            "url(https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt398b5bd347a34e86/635c684dda572d57ecd26a5c/110322_KSante_Champion_Spotlight_Banner.jpg?quality=90&crop=12%3A7&width=300) no-repeat center/cover"
          }
          height={"100%"}
          width={"100%"}
        />
      </Box>
      <Box fontWeight={"700"} padding={"10px"}>
        <Text color={"rgb(11 198 227)"} fontSize={"10px"}>
          GAME UPDATES
        </Text>
        <Text fontStyle={"italic"} fontSize={"26px"}>
          K'SANTE CHAMPION SPOTLIGHT
        </Text>
      </Box>
    </Flex>
  );
};

export default ArticleCard;
