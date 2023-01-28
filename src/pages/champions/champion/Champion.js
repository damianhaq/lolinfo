import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Overview from "../../../components/champions/champion/Overview";

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
      <div>
        <Overview data={champion} />

        {/* <p>{champion[0].title}</p> */}
        {/* <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`} alt="splashart" /> */}
      </div>
    );

  return <p>Loading</p>;
};

export default Champion;
