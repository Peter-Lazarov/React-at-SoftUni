import { useEffect, useState } from "react";

import { getAllGames } from "../../services/games-api";
import LatestGames from "./latest-games/LatestGames";

export default function Home() {

    const [gamesLatest, setGamesLatest] = useState([]);

    useEffect(() => {
        (async () => {
            const gamesAll = await getAllGames();
            setGamesLatest(gamesAll);
            //console.log(gamesAll);
        })();
    }, []);

    return (
        <>
            <section id="welcome-world">

                <div className="welcome-message">
                    <h2>ALL new games are</h2>
                    <h3>Only in GamesPlay</h3>
                </div>
                <img src="./images/four_slider_img01.png" alt="hero" />

                <div id="home-page">
                    <h1>Latest Games</h1>
                    {gamesLatest.length > 0
                        ? gamesLatest.map(game => <LatestGames _id={game._id} title={game.title} imageUrl={game.imageUrl} key={game._id} />)
                        : <h3 className="no-articles">No games yet</h3>
                    }
                </div>
            </section>
        </>
    )
}
