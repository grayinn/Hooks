/**
 * ------------------------------------------------------------------------------
 * ------------------------ React.memo -------------------
 *      1. memo() -> Higher Order Component (HOC)
 *      2. useCallback()            
 */
import { useState } from 'react'
import Content from './Content'

function App() {
    const [count, setCount] = useState(0)

    const increase = () => {
        setCount(count + 1)
    }
// Component con <Content /> sẽ bị re-render mỗi khi "Click-me" --> KH cần thiết
    return (
        <div style={{ padding: '10px 30px' }}>
            <Content /> 
            <h1>{count}</h1>
            <button onClick={increase}>Click me!</button>
        </div>
    )
}
export default App