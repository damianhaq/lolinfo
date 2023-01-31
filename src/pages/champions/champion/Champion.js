import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Overview from "../../../components/champions/champion/Overview";
import { Box } from "@chakra-ui/react";

const Champion = () => {
  const { id } = useParams();
  const [champion, setChampion] = useState(null);

  useEffect(() => {
    axios.get(`http://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion/${id}.json`).then((response) => {
      setChampion(Object.values(response.data.data));
      // console.log(Object.values(response.data.data));
    });
  }, []);

  if (champion)
    return (
      <Box backgroundColor={"#000913"}>
        <Overview data={champion} />
      </Box>
    );

  return <p>Loading</p>;
};

export default Champion;
