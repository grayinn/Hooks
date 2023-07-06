
//------------------------------------------------------
// Ex: Update user infor
import { useState } from "react" 

function App() {
    const [infor, setInfor] = useState({
        name: 'Nguyen Hong Nhung',
        age: 20,
        address: 'Ha Noi, VN'
    })

    const updateInfor = () => {
        setInfor({
            ...infor,
            bio: 'Good things'
        })
    }

    return (
        <div className="App" style={{ padding: 20 }}>
          <h1>{JSON.stringify(infor)}</h1>
          <button onClick={updateInfor}>Update User Infor</button>
        </div>
      )
}
export default App