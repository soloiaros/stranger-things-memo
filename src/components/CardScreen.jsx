import { useEffect, useState } from "react";

const endpoints = {
    characters: 'https://hawapi.theproject.id/api/v1/characters?size=20',
    locations: 'https://hawapi.theproject.id/api/v1/locations?size=20'
}

const schemas = {
    characters: ['uuid', 'first_name', 'last_name', 'thumbnail', 'birth_date'],
    locations: ['uuid', 'name', 'description', 'thumbnail'],
}

const matchFields = (elem) => { return {
    characters: (
        <>
        <p>name: {elem.first_name} {elem.last_name}</p>
        <p>birth_date: {elem.birth_date}</p>
        </>
    ),
    locations: (
        <>
        <p>addr.: {elem.name}</p>
        <p>note: {elem.description}</p>
        </>
    )
}}

export default function CardScreen ({ gameMode, onClick }) {
    const [cards, setCards] = useState([])

    useEffect (() => {
        fetch(endpoints[gameMode])
            .then(resp => resp.json())
            .then(resp => setCards(resp.map(elem => {return Object.fromEntries(
                schemas[gameMode].map(property => [property, elem[property]])
            )})));
    }, [gameMode])

    return (
        <div className="card-container">
            {cards.map(elem => {
                return (
                <div key={elem.uuid} className="card" onClick={() => onClick(elem.uuid)}>
                    <img src={elem.thumbnail} />
                    {matchFields(elem)[gameMode]}
                </div>
                )
            })}
        </div>
    )
}