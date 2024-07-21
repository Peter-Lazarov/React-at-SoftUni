import { useEffect, useState } from "react"
import { getAllGames } from "../../services/games-api";
import GameListItem from "./game-list-item.jsx/GameListItem";

export default function () {
    const [games, setGames] = useState([]);

    useEffect(() => {
        (async () => {
            const gamesAll = await getAllGames();
            setGames(gamesAll);
            //console.log(gamesAll);
        })();
    }, []);

    return (
        <>
            <section id="catalog-page">
                <h1>All Games</h1>
                {games.length > 0
                    ? games.map(game => <GameListItem _id={game._id} title={game.title} category={game.category} imageUrl={game.imageUrl} key={game._id}/>)
                    : <h3 className="no-articles">No games yet</h3>
                }
            </section>
        </>
    )
}
