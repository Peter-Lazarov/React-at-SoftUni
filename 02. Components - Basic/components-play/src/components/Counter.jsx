import { useState } from "react";

export default function Counter() {
    // let stateArray = useState[0];
    // let setCount = useState[1]

    // setTimeout(() => {
    //     count += 1;
    // }, 1000);

    const [count, setCount] = useState(0);
    setTimeout(() => {
        setCount(count + 1)
    }, 1000);
    
    return (
        <>
            <h2>Counter</h2>
            <p>{count}</p>
        </>
    )
}
