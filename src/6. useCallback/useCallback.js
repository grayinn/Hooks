/**
 * -----------------------------------------------------------------------------
 * ----------------------- REACT useCallback HOOKS -------------------------------
 *          const cachedFn = useCallback(fn, dependencies)    
 */

import { useState, useCallback } from 'react'
import Content from './Content'

function App() {
    const [count, setCount] = useState(0)

    const handleIncrease = useCallback(() => {
        setCount(prevCount => prevCount + 1)
    }, [])  // [deps] trống --> trả lại tham chiếu trước đó thay vì tạo ra hàm mới

    return (
        <div style={{ padding: '10px 30px' }}>
            <Content 
                onIncrease={handleIncrease} 
            /> 
            <h1>{count}</h1>
        </div>
    )
}
export default App