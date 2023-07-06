

// ----- 2. useEffect(function, [])      - render 1 lần
import { useState, useEffect } from "react"

function Timer() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        let timer = setTimeout(() => {
            setCount((count) => count + 1)
        }, 1000)

        return () => clearTimeout(timer)     // function cleanup   
        }, [])  // [deps] = []

    // function callback setTimeout, không có [deps] --> render lại nhiều lần
    return <h1>I have rendered {count} times!</h1>
}
export default Timer