import { useEffect, useState } from "react";

export default function Effect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Initial Render');
    }, []);

    useEffect(() => {
        console.log('Update Counter');
    }, [count]);

    const onClick = () => {
        setCount(currentCount => currentCount + 1);
    }

    return (
        <>
            <h2>Effect</h2>
            <p>{count}</p>
            <button onClick={onClick}>Add</button>
        </>
    );
}
