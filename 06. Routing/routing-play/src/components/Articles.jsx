import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";

export default function Articles() {
    const [articlesAll, setArticles] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const abortController = new AbortController();

        (async () => {
            const response = await fetch(
                'http://localhost:3030/jsonstore/advanced/articles/list',
                { signal: abortController.signal }
            );

            if (response.statusText == 'No Content') {
                navigate('/not-found');
                return;
            }

            const resultAsJSON = await response.json();
            const resultAsArray = Object.values(resultAsJSON);
            //console.log(resultAsJSON);
            //console.log(resultAsArray);

            setArticles(resultAsArray);
        })();

        return () => {
            abortController.abort();
        };
    }, []);

    return (
        <ul role="list" className="ml-20 mr-20 divide-y divide-gray-100">
            {articlesAll.map((article) => (
                <Link to={`/articles/${article._id}`} key={article._id}>
                    <li className="flex justify-between gap-x-6 py-5">
                        <div className="flex min-w-0 gap-x-4">
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">{article.title}</p>
                            </div>
                        </div>
                    </li>
                </Link>
            ))}
        </ul>
    )
}
