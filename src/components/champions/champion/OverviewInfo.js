import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const OverviewInfo = ({ champion }) => {
  return (
    <Flex justifyContent={"center"}>
      <Flex
        grow={1}
        flexDirection={["column", "column", "column", "row"]}
        margin={[0, "0 60px"]}
        position={"relative"}
        border={"1px solid #333A42"}
        backgroundColor={"#000913"}
        maxWidth={"1095px"}
      >
        <Box position={"absolute"} top={"-20"}>
          <Text>champ desc</Text>
          <Text>champ</Text>
        </Box>
        <Flex width={["100%", "100%", "100%", "50%"]}>
          <Box width={"50%"} border={"1px solid white"} padding={"60px"}>
            role
          </Box>
          <Box width={"50%"} border={"1px solid white"} padding={"60px"}>
            difficulty
          </Box>
        </Flex>
        <Box width={["100%", "100%", "100%", "50%"]} border={"1px solid white"}>
          <Text>description</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default OverviewInfo;
