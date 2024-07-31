import requests from "./requests";

const games_url = 'http://localhost:3030/jsonstore/games';
//const games_url = 'http://localhost:3030/data/games';

export const getAllGames = async () => {
    const resultAsJSON = await requests.getUnauthorised(games_url);
    //console.log(resultAsJSON);
    const resultAsValues = Object.values(resultAsJSON);
    //console.log(resultAsValues);
    return resultAsValues;
};

export const getOneGame = async (gameId) => {
    const resultAsJSON = await requests.get(games_url + `/${gameId}`);

    return resultAsJSON;
}

export const createGame = async (gameData) => {
    // console.log('in api');
    // console.log(gameData);
    const result = await requests.post(games_url, gameData);

    return result;
}
