

import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import CardSection from "./Components/CardSection";
import './Style/index.scss';
import {getCharacter} from './Utils/Fetch'



function App() {
  const [characterList,setCharacterList] = useState([]);
  
  async function getChar() {
    const data = await getCharacter();
    setCharacterList(data);
  }
   async function getSearchResults(data) {
    console.log(data);
    setCharacterList(data);
  }

  
  useEffect(() => {
    getChar();
  }, []);
  
    return (
      <div className="App">
        <Navbar />
        <Search getSearchResults={getSearchResults} />
        <CardSection characterList={characterList}/>
      </div>
    );
}

export default App;
