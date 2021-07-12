import React from "react";
import CharacterCard from "./CharacterCard";
const CardSection = ({ characterList }) => {
  return (
    // creating card structure for each item
    <div className="card-section">
      {characterList.map((chars, id) => {
        return <CharacterCard key={id} chars={chars} />;
      })}
    </div>
  );
};

export default CardSection;
