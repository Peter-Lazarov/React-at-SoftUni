import { useParams } from "react-router-dom";

import { useOneGame } from "../../hooks/useGames";
import useForm from "../../hooks/useForm";
import { useCreateComment, useGetAllComments } from "../../hooks/useComments";

import { useAuthenticationContext } from "../../contexts/AuthenticationContext";

const initialValues = {
    comment: ''
}

export default function GameDetails() {
    //const [loading, setLoading] = useState(false);

    const { gameId } = useParams();
    const [game] = useOneGame(gameId);
    const [comments, setComments] = useGetAllComments(gameId);
    const createComment = useCreateComment();
    const { isAuthenticated } = useAuthenticationContext();

    const {
        changeHandler,
        submitHandler,
        formValues
    } = useForm(initialValues, async ({ comment }) => {

        try {
            const newComment = await createComment(gameId, comment);
            if (comments != undefined && comments != null) {
                const commentId = `comment${Object.keys(comments).length + 1}`;
                setComments({ ...comments, [commentId]: newComment });
            } else {
                setComments({ ...comments, newComment });
            }
        } catch (error) {
            console.log(error.message);
        }
    });

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

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
                        {comments != null
                            ?
                            <ul>
                                {Object.values(comments).map(comment => (
                                    <li key={comment._id} className="comment">
                                        <p>Username: {comment.text}</p>
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
                {isAuthenticated && (
                    <article className="create-comment">
                        <label>Add new comment:</label>
                        <form className="form" onSubmit={submitHandler}>

                            <textarea name="comment"
                                placeholder="Comment......"
                                onChange={changeHandler}
                                value={formValues.comment}
                            ></textarea>
                            <input className="btn submit" type="submit" value="Add Comment" />
                        </form>
                    </article>
                )}
            </section>
        </>
    )
}
//{userName}