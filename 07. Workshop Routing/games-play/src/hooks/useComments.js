import { useEffect, useReducer, useState } from "react";
import { createComment, getAllComments } from "../services/comments-api";

export function useCreateComment() {
    const commentCreateHandler = async (gameId, commentText) => {
        //console.log(commentText);
        const result = await createComment(gameId, commentText);
        return result;
    }

    return commentCreateHandler;
}

export function commentReducer(currentState, action) {
    switch (action.type) {
        case 'loadGameComments':
            const payload = action.comments;

            if (payload != undefined) {
                return {
                    ...currentState,
                    ...payload
                }
            } else {
                return currentState;
            }
        case 'addGameComments':
            const comment = action.payload;
            return {
                ...currentState,
                comment
            }
        default:
            return currentState;
    }
}

export function useGetAllComments(gameId) {
    //const [comments, setComments] = useState();
    const [comments, dispatch] = useReducer(commentReducer, {});

    useEffect(() => {
        (async () => {
            const gameComments = await getAllComments(gameId);
            //console.log(gameComments);
            //setComments(result);
            dispatch({ type: 'loadGameComments', comments: gameComments });
        })()
    }, [gameId])

    return [comments, dispatch];
}
