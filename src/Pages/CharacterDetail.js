import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import { getSelectedCharacter } from '../Utils/Fetch'
import { Link } from "react-router-dom";
import { IoChevronBackCircle } from "react-icons/io5"
import axios from "axios";
const CharacterDetail = () => {

    const { id } = useParams();


    const [character, setCharacter] = useState({
        name: "",
        image: "",
        status: "",
        species: "",
        origin: { name: "" },
        location: { name: "" },
        episode: [],
    });
    const [episodes, setEpisodes] = useState([]);


    useEffect(() => {

        function getEpisodesByIds(ids) {
            axios
                .get("https://rickandmortyapi.com/api/episode/" + ids)
                .then((response) => {
                    if (response.data !== null && !Array.isArray(response.data)) {
                        setEpisodes([response.data]);
                    } else {
                        setEpisodes(response.data);
                    }
                })
                .catch((error) => {
                    console.log(error);
                    setEpisodes([]);
                });
        }
        if (character.episode !== undefined) {
            let episodes = character.episode.slice(0, 5).map(function (v) {
                return v.split("/").pop();
            });

            getEpisodesByIds(episodes.join(","));
        }
    }, [character]);



    useEffect(() => {
        // Information of the selected character
        async function getSelectChar(id) {
            const data = await getSelectedCharacter(id);
            setCharacter(data);
        };
        getSelectChar(id);
    }, [id])

    return (
        <div className="selected-character">
            <div className="go-back-button" >
                <Link to="/" >
                    <IoChevronBackCircle size={50} className="icon" />
                </Link>
            </div>
            <div className="character-details">
                <div className="image-container">
                    <img src={character.image} alt={character.name} />
                </div>
                <div className="main-detail">
                    <ul className="detail-list">
                        <li>
                            <strong>Species:</strong> {character.species}
                        </li>
                        <li>
                            <strong>Gender:</strong> {character.gender}
                        </li>
                        <li>
                            <strong>Status:</strong> {character.status}
                        </li>
                        <li>
                            <strong>Location:</strong> {character.location.name}
                        </li>
                        <li>
                            <strong>Origin:</strong> {character.origin.name}
                        </li>
                        <li>

                            <strong>Episodes : </strong>

                            <ul className="episode-container">
                                {episodes.slice(0, 5).map((episode, index) => (
                                    <li key={index} className="episodes-list">
                                        {index + 1}: {episode.name}
                                    </li>
                                ))}

                            </ul>

                        </li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default CharacterDetail

