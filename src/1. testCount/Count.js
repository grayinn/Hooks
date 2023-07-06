import { useState } from "react";

//const orders = [100, 200, 300]

function App() {
  const [counter, setCounter] = useState(1)

  /**
   * Initial state với callback
   * Đưa giá trị tính toán vào làm giá trị khởi tạo
   * 
   *  const [counter, setCounter] = useState(() => {
        const total = orders.reduce((total, current) => total + current)
        console.log(total)
        return total
      })
   */

  const handleIncrease = () => {
    setCounter(counter + 1)
  }

  /**
   *  Set state với callback
  const handleIncrease = () => {
    setCounter(prevState => prevState + 1)    - 1
    setCounter(prevState => prevState + 1)    - 4
    setCounter(prevState => prevState + 1)    - 7
  }
   */

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default App;
