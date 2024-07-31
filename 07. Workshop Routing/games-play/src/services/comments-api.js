import requests from "./requests";

const games_url = 'http://localhost:3030/jsonstore/games';

export const createComment = async (gameId, text) => {
    const result = await requests.post(games_url + `/${gameId}/comments`, {gameId, text });
    //console.log(result);
    return result;
}

export const getAllComments = async (gameId) => {
    const result = await requests.get(games_url + `/${gameId}/comments`);
    //const comments = Object.values(result);
    //console.log(result);
    return result;
}
