import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { useCreateGame } from "../../hooks/useGames";

const initialValues = {
    title: '',
    category: '',
    maxLevel: '',
    imageUrl: '',
    summary: ''
};

export default function GameCreate() {
    const navigate = useNavigate();
    const createGame = useCreateGame();

    const createHandler = async (values) => {
        try {
            const { _id: gameId } = await createGame(values);
            //console.log('here 1 ' + gameId);
            navigate(`/games/${gameId}/details`);
        } catch (error) {
            console.log(error);
        }
    }

    const {
        formValues,
        changeHandler,
        submitHandler
    } = useForm(initialValues, createHandler);

    return (
        <>
            <section id="create-page" className="auth">
                <form id="create" onSubmit={submitHandler}>
                    <div className="container">

                        <h1>Create Game</h1>
                        <label htmlFor="leg-title">Legendary title:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formValues.title}
                            onChange={changeHandler}
                            placeholder="Enter game title..."
                        />

                        <label htmlFor="category">Category:</label>
                        <input
                            type="text"
                            id="category"
                            name="category"
                            value={formValues.category}
                            onChange={changeHandler}
                            placeholder="Enter game category..."
                        />

                        <label htmlFor="levels">MaxLevel:</label>
                        <input
                            type="number"
                            id="maxLevel"
                            name="maxLevel"
                            value={formValues.maxLevel}
                            onChange={changeHandler}
                            min="1" placeholder="1"
                        />

                        <label htmlFor="game-img">Image:</label>
                        <input
                            type="text"
                            id="imageUrl"
                            name="imageUrl"
                            value={formValues.imageUrl}
                            onChange={changeHandler}
                            placeholder="Upload a photo..."
                        />

                        <label htmlFor="summary">Summary:</label>
                        <textarea
                            name="summary"
                            id="summary"
                            value={formValues.summary}
                            onChange={changeHandler}
                        ></textarea>
                        <input className="btn submit" type="submit" value="Create Game" />
                    </div>
                </form>
            </section>
        </>
    )
}
