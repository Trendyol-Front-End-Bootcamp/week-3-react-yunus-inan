import React from 'react'
import { useEffect, useState } from "react";

import Search from "../Components/Search";
import CardSection from "../Components/CardSection";
import PaginationButtons from '../Components/PaginationButtons';
import { getCharacter } from '../Utils/Fetch'



const Home = () => {
    const [characterList, setCharacterList] = useState([]);

    const [page, setPage] = useState("1");



    // Page opening fetch 
    async function getChar(pageNumber) {
        const data = await getCharacter(pageNumber);
        setCharacterList(data);


    }

    // Filter results
    async function getSearchResults(data) {

        setCharacterList(data);
    }




    useEffect(() => {
        const abortController = new AbortController();

        getChar(page);


        return function cleanup() {
            abortController.abort();
        }
    }, [page]);
    return (
        <div className="home-page">

            <Search getSearchResults={getSearchResults} page={page} />
            <PaginationButtons setPage={setPage} />

            <CardSection characterList={characterList} />


        </div>
    )
}

export default Home
