import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getOneGame } from "../../services/games-api";
import { create } from "../../services/comments-api";

export default function GameDetails() {
    const [game, setGame] = useState({});
    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');
    const { gameId } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const gameCurrent = await getOneGame(gameId);
            setGame(gameCurrent);
            setLoading(false);
        })();
    }, []);

    const commentSubmitHandler = async (event) => {
        event.preventDefault();

        const newComment = await create(gameId, username, comment);

        setGame(previousState => ({
            ...previousState,
            comments: {
                ...previousState.comments,
                [newComment._id]: newComment
            }
        }))

        setUsername('');
        setComment('');
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <section id="game-details">
                <h1>Game Details</h1>
                <div className="info-section">

                    <div className="game-header">
                        <img className="game-img" src={game.imageUrl} />
                        <h1>{game.title}</h1>
                        <span className="levels">MaxLevel: {game.maxLevel}</span>
                        <p className="type">{game.category}</p>
                    </div>

                    <p className="text">{game.summary}</p>

                    {/* <!-- Bonus ( for Guests and Users ) --> */}
                    <div className="details-comments">
                        <h2>Comments:</h2>
                        {/* {console.log(game)} */}
                        {game.comments ?
                            <ul>
                                {Object.values(game.comments).map(comment => (
                                    <li key={comment._id} className="comment">
                                        <p>{comment.username}: {comment.text}</p>
                                    </li>
                                ))}
                            </ul>
                            :
                            <p className="no-comment">No comments.</p>
                        }
                    </div>

                    {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                    <div className="buttons">
                        <a href="#" className="button">Edit</a>
                        <a href="#" className="button">Delete</a>
                    </div>
                </div>

                {/* <!-- Bonus --> */}
                {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
                <article className="create-comment">
                    <label>Add new comment:</label>
                    <form className="form" onSubmit={commentSubmitHandler}>
                        <input className="btn submit" type="text" placeholder="Pesho" name="username" onChange={(event) => setUsername(event.target.value)} value={username} />
                        <textarea name="comment" placeholder="Comment......" onChange={(event) => setComment(event.target.value)} value={comment}></textarea>
                        <input className="btn submit" type="submit" value="Add Comment" />
                    </form>
                </article>
            </section>
        </>
    )
}
