import React from "react";

export default function CharacterCard({ chars }) {
  return (
    <div className="character-card">
        <div className="img">
            <img src={chars.image} alt="Character" />
        </div>
        <div className="info">
            <p><strong>Name:</strong> {chars.name}</p>
            <p><strong>Species:</strong> {chars.species}</p>
            <p><strong>Gender:</strong> {chars.gender}</p>
            <p><strong>Origin:</strong> {chars.origin.name}</p>
        </div>
    </div>
  );
}