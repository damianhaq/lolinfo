import { AspectRatio, Box, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
import VerticalSectionTitle from "../../VerticalSectionTitle";
import OverviewInfo from "./OverviewInfo";

const Overview = ({ data }) => {
  const champion = data[0];
  useEffect(() => {
    console.log(champion);
  }, []);

  const aspectRatio = 1215 / 716;

  return (
    <>
      <Box
        overflow={"hidden"}
        display={"flex"}
        alignItems={"flex-start"}
        // height={"865px"}
        position={"relative"}
        color={"#000"}
        paddingTop={"30px"}
        paddingRight={[0, "60px"]}
        _after={{ content: "''", height: "100%", width: "100%", bottom: 0, bgGradient: "linear(to-t, #000913, transparent)", position: "absolute" }}
      >
        <VerticalSectionTitle title={"OVERVIEW"} color="white" />
        {/* BACKGROUND */}
        <Box
          position={"absolute"}
          top={"-10"}
          left={"-10"}
          zIndex={"-1"}
          height={"120%"}
          width={"120%"}
          filter={"auto"}
          blur={"8px"}
          brightness={"40%"}
          background={`url('http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg') no-repeat top/cover`}
        ></Box>
        {/* SPLASHART */}
        <Box
          position={"relative"}
          zIndex={2}
          margin={"0 auto"}
          maxHeight={"100%"}
          // border={"1px solid white"}
          _after={{ content: "''", height: "30%", width: "100%", bottom: 0, bgGradient: "linear(to-t, #000913, transparent)", position: "absolute" }}
        >
          <Image src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`} alt="splashart" />
        </Box>
      </Box>
      <OverviewInfo champion={champion} />
    </>
  );
};

export default Overview;
