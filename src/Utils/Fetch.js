import axios from "axios";

const currentURL = "https://rickandmortyapi.com/api/character/";

export const getCharacter = async () => {
    const data = axios.get(`https://rickandmortyapi.com/api/character/`)
        .then((response) => {
            return response.data.results;
        })
    return data;

};
export const getSearchCharacter = async (status, gender) => {
    const data = axios.get(`https://rickandmortyapi.com/api/character/?&status=${status}&gender=${gender}`)
        .then((response) => {
            return response.data.results;
        })
    return data;

};
export const getSelectedCharacter = async (id) => {
    const data = axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => {
            return response.data;
        })
    return data;

};
