import React from "react";

// mettre les accolades pour destructurer les props
const Card = ({ country }) => {
  return (
    <li className="card">
      <img
        src={country.flags.svg}
        alt={"drapeau" + country.translations.fra.common}
      />
      <div className="infos">
        <h2>{country.translations.fra.common}</h2>
        <h4>{country.capital}</h4>
        {/* toLocaleString pour mettre au bon format les chiffres */}
        <p>Pop . {country.population.toLocaleString()}</p>
      </div>
    </li>
  );
};

export default Card;
