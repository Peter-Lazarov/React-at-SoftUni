import { useEffect, useState } from "react";

export function useFetch(url, initialData) {
    const [data, setData] = useState(initialData);

    useEffect(() => {
        (async () => {
            const response = await fetch(url);
            const resultAsJSON = await response.json();
            setData(resultAsJSON);
        })();
    }, [url]);

    return { data };
}
