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
      <>
        <ChampionsHeader />
        {champions && (
          <Box display={"flex"} flexWrap="wrap" gap={"20px"}>
            {champions.map((el) => (
              <ChampionCard key={el.id} data={el} />
            ))}
          </Box>
        )}
      </>
    );
};

export default Champions;
