import React, { useEffect } from 'react';
import { useState } from "react";
import { getSearchCharacter } from '../Utils/Fetch'
const Search = ({ getSearchResults, page, setPage }) => {

  //Buradaki pagination için yazdığım kodları okumamanızı öneriyorum. Sağlığa zararlı olabilir :D 


  //Filter State Elements
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");


  async function fetch() {
    const data = await getSearchCharacter(page, status, gender);
    getSearchResults(data);
  }
  // We fetch according to the data returned from selectable inputs
  async function handleSubmit(e) {
    e.preventDefault();
    setPage("1");
    fetch();
  };

  //fetch for the new page every time the page changes
  useEffect(() => {


    fetch();
  }, [page]);
  return (
    <form className="search-form">

      <div className="input-group">
        <label>Status</label>
        <select onChange={(e) => setStatus(e.target.value)} defaultValue={status}>
          <option value="">None</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div className="input-group">
        <label>Gender</label>
        <select onChange={(e) => setGender(e.target.value)} defaultValue={gender}>
          <option value="">None</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div className="input-group">

        <button className="search" onClick={handleSubmit}>Search</button>
      </div>
    </form>
  )
}

export default Search;