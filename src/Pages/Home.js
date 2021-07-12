import React from 'react'
import { useEffect, useState } from "react";

import Search from "../Components/Search";
import CardSection from "../Components/CardSection";
import { getCharacter } from '../Utils/Fetch'



const Home = () => {
    const [characterList, setCharacterList] = useState([]);

    // Page opening fetch 
    async function getChar() {

        const data = await getCharacter();
        setCharacterList(data);


    }
    // Filter results
    async function getSearchResults(data) {

        setCharacterList(data);
    }




    useEffect(() => {
        const abortController = new AbortController();

        getChar();
        return function cleanup() {
            abortController.abort();
        }
    }, []);
    return (
        <div className="home-page">

            <Search getSearchResults={getSearchResults} />
            <CardSection characterList={characterList} />


        </div>
    )
}

export default Home
