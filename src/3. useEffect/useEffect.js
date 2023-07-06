/**
 * -----------------------------------------------------------------------------
 * ----------------------- useEffect HOOKS -------------------------------------
 *              useEffect(<function>, <dependency>) 
 */

/**
 *  3 trường hợp:    1. useEffect(function)          - render mãi
 *                   2. useEffect(function, [])      - render 1 lần
 *                   3. useEffect(function, [deps])  - render lại khi value trong [deps] thay đổi
 */


// ----- 1. useEffect(function) - Render liên tục k dừng
import { useState, useEffect } from "react"

function Timer() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1)
        }, 1000)
    })

    // function callback setTimeout, không có [deps] --> render lại nhiều lần
    return <h1>I have rendered {count} times!</h1>
}
export default Timer

