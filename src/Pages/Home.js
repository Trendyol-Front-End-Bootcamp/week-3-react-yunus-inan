import React from 'react'
import { useEffect, useState } from "react";

import Search from "../Components/Search";
import CardSection from "../Components/CardSection";
import PaginationButtons from '../Components/PaginationButtons';
import NoMatch from './NoMatch';
import { getCharacter } from '../Utils/Fetch'



const Home = () => {
    const [characterList, setCharacterList] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [page, setPage] = useState("1");

    //404 Page Not Found State
    const [error, setError] = useState(true);

    //We determine whether the filtered component or the default component will be sent as props.
    const [control, setControl] = useState("true");

    // Page opening fetch 
    async function getChar(pageNumber) {
        try {
            const data = await getCharacter(pageNumber);
            setCharacterList(data);
        } catch {
            setError(false);
        }
    }

    // Filter results
    async function getSearchResults(data) {
        try {
            setControl("false");
            setFiltered(data);
            setCharacterList(data);
        } catch {
            setError(false);
        }
    }


    useEffect(() => {
        //Is it a filtered data or unfiltered data, I control it and set it according to my conditions.
        if (control === "true") {
            getChar(page);
        } else {
            getSearchResults(filtered);
        }

    }, [page]);
    return (
        <div className="home-page">

            <Search getSearchResults={getSearchResults} page={page} setPage={setPage} />
            <PaginationButtons setPage={setPage} />
            {
                error ?

                    <CardSection characterList={characterList} />
                    :
                    <NoMatch />
            }
        </div>
    )
}

export default Home
