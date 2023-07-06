/**
 * ----------------------------------------------------------------------------------
 * -------------------------------- useRef Hook -------------------------------------
 * 
            It can be lưu trữ giá trị có thể thay đổi mà không a re-render when updated.
            (Biến tham chiếu này sẽ được giữ nguyên giá trị của nó giữa các lần render của component, 
*           mà không gây ra việc render lại component khi giá trị của biến tham chiếu thay đổi.)

            useRef (initialValue) --> trả về Obj {current: }
 */

// App countdown 1 minute (start / stop button)
import { useRef, useState } from 'react'
//let timerID - Có thể - NHƯNG với React: mỗi file = 1 function component
function App() {
    const [count, setCount] = useState(60)
            
    const timerID = useRef()
       
    const handleStart = () => {
        timerID.current = setInterval(() => {
            setCount(prevCount => prevCount - 1)
        }, 1000)
        //console.log('Start -> ', timerID.current)
    }
            
    const handleStop = () => {
        clearInterval(timerID.current)
        //console.log('Stop -> ', timerID.current)
    }
            
    return (
        <div style={{ padding: 30 }}>
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}
export default App