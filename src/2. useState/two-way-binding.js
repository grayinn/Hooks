// ---- Two-way binding (ràng buộc 2 chiều)

// Xử lý form Name + Email Register
import { useState } from "react" 

function App() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    //console.log(name)
    const handleSubmit = () => {
        // CALL API
        console.log({
            name,
            email
        })
    }

    return (
        <div style={{ padding: 32 }}>
            <input 
                value={name}    // truyền vào value -> tạo two-way binding
                onChange={e => setName(e.target.value)}
            />

            <input 
                value={email}    
                onChange={e => setEmail(e.target.value)}
            />

            <button onClick={handleSubmit}>Change</button>
        </div>
    )
}

export default App