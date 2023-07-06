//      3. index.js --------------------------
import { useReducer } from 'react'
import  reducer, { initState1 } from './reducer'
import { setJob, addJob, deleteJob } from './actions'


// import { useReducer } from "react"

function App() {
    const [state, dispatch] = useReducer(reducer, initState1)
    const { job, jobs } = state
    // console.log(state);
    const handleSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(""))
    }

    return (
        <div className="App">
        <h3>Todo</h3>
        <input
            value={job}
            placeholder="Enter to do ..."
            onChange={(e) => dispatch(setJob(e.target.value))}
        />
        <button onClick={handleSubmit}>Add</button>
        <ul>
            {jobs.map((job, index) => (     
            <li key={index}>
                {job}
                <span onClick={() => dispatch(deleteJob(index))}> &times;</span>
            </li>
            ))}
        </ul>
        </div>
    )
}

export default App