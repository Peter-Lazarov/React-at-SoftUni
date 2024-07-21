import get from "./requests";

const games_url = 'http://localhost:3030/jsonstore/games';

export const getAllGames = async () => {
    const resultAsJSON = await get(games_url);
    //console.log(resultAsJSON);
    const resultAsValues = Object.values(resultAsJSON);
    //console.log(resultAsValues);
    return resultAsValues;
};

export const getOneGame = async (gameId) => {
    const resultAsJSON = await get(games_url + `/${gameId}`);

    return resultAsJSON;
}
