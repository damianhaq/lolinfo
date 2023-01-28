import React from "react";
import { Text, Box } from "@chakra-ui/react";

const VerticalSectionTitle = ({ title, color }) => {
  return (
    <Box display={"flex"} alignItems={"center"} margin={"10px"}>
      <Text
        fontSize={"10px"}
        fontWeight={"600"}
        position={"relative"}
        color={color}
        transform={"rotate(-90deg)"}
        _after={{ content: "''", height: "1px", width: "15px", backgroundColor: color, position: "absolute", top: "45%", right: "-20px" }}
      >
        {title}
      </Text>
    </Box>
  );
};

export default VerticalSectionTitle;
