// ----- 3. useEffect(function, [deps])
// -- Enter button + -> Count * 2 = Calculation
import { useState, useEffect } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [cal, setCal] = useState(0);

    useEffect(() => {
        setCal(() => count * 2);
    }, [count]); // [deps] = [count]

    return ( 
        <p>Count: {count}</p>,
        <button onClick={() => setCount((c) => c + 1)}>+</button>,
        <p>Calculation: {cal}</p>
    )
}

export default Counter