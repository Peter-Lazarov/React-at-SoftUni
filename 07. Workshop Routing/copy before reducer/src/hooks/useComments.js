import { useEffect, useState } from "react";
import { createComment, getAllComments } from "../services/comments-api";

export function useCreateComment() {
    const commentCreateHandler = async (gameId, commentText) => {
        //console.log(commentText);
        const result = await createComment(gameId, commentText);
        return result;
    }

    return commentCreateHandler;
}

export function useGetAllComments(gameId) {
    const [comments, setComments] = useState();
        
    useEffect(() => {
        (async () => {
            const result = await getAllComments(gameId);
            //console.log(result);
            setComments(result);
        })()
    }, [gameId])
    
    return [comments, setComments];
}
