import { useEffect, useState } from "react"

import { getAllGames, getOneGame, createGame } from "../services/games-api";

export function useAllGames() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        (async () => {
            const gamesAll = await getAllGames();
            setGames(gamesAll);
            //console.log(gamesAll);
        })();
    }, []);

    return [games, setGames];
}

export function useOneGame(gameId){
    const [game, setGame] = useState({});

    useEffect(() => {
        (async () => {
            const gameOne = await getOneGame();
            setGames(gameOne);
            //console.log(gamesAll);
        })();
    }, [gameId]);

    return [game, setGame];
}

export function useCreateGame() {
    const gameCreateHandler = async (gameData) => {
        const result = await createGame(gameData);
        return result;
    }

    return gameCreateHandler;
}
