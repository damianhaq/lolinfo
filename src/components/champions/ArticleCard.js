import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const ArticleCard = () => {
  return (
    <Flex
      marginRight={"13px"}
      backgroundColor={"white"}
      role={"group"}
      alignItems={"center"}
      border={"1px solid #ACACAC"}
      width={["100%", 450, 600]}
      height={[100, 150]}
      position={"relative"}
      _after={{
        content: "''",
        width: "20px",
        height: "20px",
        borderBottom: "1px solid #ACACAC",
        position: "absolute",
        right: "-2.5",
        top: "-2.5",
        transform: "rotate(45deg)",

        backgroundColor: "#F8F8F8",
      }}
    >
      <Box
        _before={{ left: "-1px", position: "absolute", zIndex: "1", display: "inline-block", content: "''", height: "100%", width: "1px", backgroundColor: "#ACACAC" }}
        pos={"relative"}
        height={[86, 128]}
        width={[86, 219]}
        flexShrink={"0"}
        flexGrow={"1"}
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
        <Text marginBottom={"8px"} color={"rgb(11 198 227)"} fontSize={"10px"}>
          GAME UPDATES
        </Text>
        <Text lineHeight="1.5rem" fontStyle={"italic"} fontSize={[14, 26]}>
          K'SANTE CHAMPION SPOTLIGHT
        </Text>
      </Box>
    </Flex>
  );
};

export default ArticleCard;
