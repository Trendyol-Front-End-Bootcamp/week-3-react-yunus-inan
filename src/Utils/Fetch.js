import axios from "axios";


export const getCharacter = async () => {
    const data = axios.get("https://rickandmortyapi.com/api/character/")
      .then((response) => {
          return response.data.results;
      })
      return data;
    
};
export const getSearchCharacter = async (status,gender) => {
    const data = axios.get(`https://rickandmortyapi.com/api/character/?&status=${status}&gender=${gender}`)
      .then((response) => {
          return response.data.results;
      })
      return data;
    
};