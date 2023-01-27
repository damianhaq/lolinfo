import React, { useEffect, useState } from "react";
import axios from "axios";
import ChampionCard from "../../components/champions/ChampionCard";

import { Box } from "@chakra-ui/react";
import ChampionsHeader from "../../components/champions/ChampionsHeader";

const Champions = () => {
  const [champions, setChampions] = useState(null);

  useEffect(() => {
    axios.get("http://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion.json").then((response) => {
      setChampions(Object.values(response.data.data));
      // console.log(Object.values(response.data.data));
    });
  }, []);

  if (champions)
    return (
      <Box paddingTop={"10px"}>
        <ChampionsHeader />
        {champions && (
          <Box margin={"0 auto"} maxWidth={1390} padding={"30px"} display={"flex"} justifyContent="center" flexWrap="wrap" gap={"20px"}>
            {champions.map((el) => (
              <ChampionCard key={el.id} data={el} />
            ))}
          </Box>
        )}
      </Box>
    );
};

export default Champions;
