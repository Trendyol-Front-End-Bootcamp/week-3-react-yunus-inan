import React from 'react';
import { useState } from "react";
import { getSearchCharacter } from '../Utils/Fetch'
const Search = ({ getSearchResults }) => {

  //Filter State Elements
  const [status, setStatus] = useState("alive");
  const [gender, setGender] = useState("female");

  // We fetch according to the data returned from selectable inputs
  async function handleSubmit(e) {
    e.preventDefault();
    const data = await getSearchCharacter(status, gender);
    getSearchResults(data);

  };

  return (
    <form className="search-form">

      <div className="input-group">
        <label>Status</label>
        <select onChange={(e) => setStatus(e.target.value)} defaultValue="alive">
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div className="input-group">
        <label>Gender</label>
        <select onChange={(e) => setGender(e.target.value)} defaultValue="female">
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div className="input-group btn">

        <button className="search-btn" onClick={handleSubmit}>Search</button>
      </div>
    </form>
  )
}

export default Search;