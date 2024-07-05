import { useState } from "react";

export default function Click() {

    const [count, setCount] = useState(0);

    let countText = `Positive ${count}`;
    let color = 'green';
    if(count < 0){
        countText = `Negative ${count}`;
        color = 'red';
    }

    const buttonClickHandlerIncrease = () => {
        setCount(count + 1);
    }

    const buttonClickHandlerReset = () => {
        setCount(0);
    }

    const buttonClickHandlerDecrease = () => {
        setCount(count - 1);
    }
    
    return (
        <>
            <h2>Click Counter</h2>
            <p>{count}</p>

            <p style={{color}}>{countText}</p>
            <button onClick={buttonClickHandlerIncrease}>+</button>
            <button onClick={buttonClickHandlerReset}>0</button>
            <button onClick={buttonClickHandlerDecrease}>-</button>

        </>
    )
}
