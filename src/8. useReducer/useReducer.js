/**
 * -----------------------------------------------------------------------------
 * ---------------------------- useReducer hook --------------------------------   
 *          useReducer(<reducer>, <initialState>)
 */ 
// App Enter Up -> num+1; Enter Down -> num-1
import { useReducer } from "react"

//init state
const initState = 0

//action
const UP_ACTION = "up"
const DOWN_ACTION = "down"

//reducer (dựa vào action để đưa ra cái state mới)
const reducer = (state, action) => {
    switch (action) {
        case UP_ACTION:
        return state + 1
        case DOWN_ACTION:
        return state - 1
        default:
        throw new Error("Invalid action")
    }
}
//dispatch = func (reducer, initState) (initState = count)
function Reducer() {
    const [count, dispatch] = useReducer(reducer, initState)
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(DOWN_ACTION)}>DOWN</button>
            <button onClick={() => dispatch(UP_ACTION)}>UP</button>
        </div>
    )
}
export default Reducer