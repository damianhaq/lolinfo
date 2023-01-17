import React, { useEffect } from "react";
import axios from "axios";

const Testapi = () => {
  useEffect(() => {
    axios.get("http://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion.json").then((response) => console.log(response.data.data));
  }, []);

  return <div>Testapi</div>;
};

export default Testapi;
