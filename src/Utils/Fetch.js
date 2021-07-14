import axios from "axios";

// currentURL = "https://rickandmortyapi.com/api/character/";


// A general data retrieval section without filters
export const getCharacter = async (page) => {
    const data = axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
        .then((response) => {
            return response.data.results;
        })
    return data;

};

// filter by searched feature
export const getSearchCharacter = async (page, status, gender) => {
    const data = axios.get(`https://rickandmortyapi.com/api/character/?page=${page}&status=${status}&gender=${gender}`)
        .then((response) => {
            return response.data.results;
        })
    return data;

};

//data extraction for a single selected character
export const getSelectedCharacter = async (id) => {
    const data = axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => {
            return response.data;
        })
    return data;

};
