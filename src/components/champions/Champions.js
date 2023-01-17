import React, { useEffect, useState } from "react";
import axios from "axios";
import Champion from "./champion/Champion";
import { Box } from "@chakra-ui/react";

const Champions = () => {
  const [champions, setChampions] = useState(null);
  useEffect(() => {
    axios.get("http://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion.json").then((response) => {
      setChampions(Object.values(response.data.data));
      console.log(Object.values(response.data.data));
    });
  }, []);

  if (champions)
    return (
      <Box display={"flex"} flexWrap="wrap" gap={"20px"}>
        {champions.map((el) => (
          <Champion key={el.id} data={el} />
          // <ul key={el.id}>{el.name}</ul>
        ))}
      </Box>
    );
  return <div>Loading</div>;
};

export default Champions;
