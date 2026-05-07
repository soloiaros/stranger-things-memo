import { useEffect, useState } from "react";

export default function CardScreen ({ onClick }) {
    const [cards, setCards] = useState([])

    useEffect (() => {
        fetch('https://hawapi.theproject.id/api/v1/characters?size=20')
            .then(resp => resp.json())
            .then(resp => setCards(resp.map(char => { return {
                id: char.uuid,
                name: `${char.first_name} ${char.last_name}`,
                thumbnail: char.images[0],
                birthDate: char.birth_date,
            }}
            )));
    }, [])

    return (
        <div className="card-container">
            {cards.map(char => {
                return (
                <div key={char.id} className="card" onClick={onClick}>
                    <div className="thumbnail-container">
                        <img src={char.thumbnail} alt={char.name + "'s portrait"} />
                    </div>
                    <p className="name">{char.name}</p>
                    <p className="birthday">{char.birthDate}</p>
                </div>
                )
            })}
        </div>
    )
}