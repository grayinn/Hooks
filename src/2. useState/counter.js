/**
 * -------------------------- 1. useState --------------------------------------
 *      Trạng thái dlieu
 *      Use: khi data change, UI auto update (render lại theo data)
 *      Use: import { useState } from 'react' -> add to function component
 */

import { useState } from "react" // lấy ra

function App() {

  const [counter, setCounter] = useState(1)

  const handleIncrease = () => {
    setCounter(counter + 1)
  }

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default App


