
import GameListItem from "./game-list-item/GameListItem";
import { useAllGames } from "../../hooks/useGames";

export default function () {
    const [games, setGames] = useAllGames();

    return (
        <>
            <section id="catalog-page">
                <h1>All Games</h1>
                {games.length > 0
                    ? games.map(game => <GameListItem 
                        _id={game._id} 
                        title={game.title} 
                        category={game.category} 
                        imageUrl={game.imageUrl} 
                        key={game._id}/>)
                    : <h3 className="no-articles">No games yet</h3>
                }
            </section>
        </>
    )
}
