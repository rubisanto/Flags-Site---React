import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

// useEffect et useState sont des hooks qui permettent de récupérer des données dans le state du composant
const Countries = () => {
  // déclarer variable
  const [data, setData] = useState([]);
  // useEffect permet de déclencher une fonction à chaque fois que le composant est monté
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="countries">
      <h1>Countries</h1>
      <ul>
        {data.map((country, index) => (
          // mise en place d'une props
          <Card key={index} country={country} />
        ))}
      </ul>
    </div>
  );
};

export default Countries;
