import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import { getSelectedCharacter } from '../Utils/Fetch'
import { Link } from "react-router-dom";
import { IoChevronBackCircle } from "react-icons/io5"

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

    let count = 0;


    async function getSelectChar(id) {
        const data = await getSelectedCharacter(id);
        setCharacter(data);
    }
    useEffect(() => {
        getSelectChar(id);
    }, [count])

    return (
        <div className="selected-character">
            <div className="back-link" >
                <Link to="/" >
                    <IoChevronBackCircle size={50} className="icon" />
                </Link>
            </div>
            <div className="character-container">
                <div className="img-container">
                    <img src={character.image} alt={character.name} />
                </div>
                <div className="info">
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

                            <strong>Episodes:</strong> {character.episode.slice(0, 5).map((element, index) => {
                                return (
                                    <p>{index + 1}-{element.substring(32, 42)}</p>
                                )
                            })}

                        </li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default CharacterDetail

