/**
 * -----------------------------------------------------------------------------
 * ---------------------------- useMemo Hook --------------------------------    
 *      memo: tránh component bị re-render không cần thiết
 *      useMemo: tránh thực hiện lại một logic không cần thiết      
 */
// App input product + price -> total
import { useState, useMemo, useRef } from 'react'

function App() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [products, setProducts] = useState([])

    const nameRef = useRef()

    const handleSubmit = () => {
        setProducts([...products, {
            name,
            price: +price  
        }])
        setName('')       // Trả về chuỗi rỗng after Add
        setPrice('')
        nameRef.current.focus() 
    }

    // Just cal total when products changes, return result
    const total = useMemo(() => {
        const result = products.reduce((total, product) => {
        return total + product.price
        }, 0);

        return result
    }, [products]) 

    return (
        <div style={{ padding: "10px 32px" }}>
        <input
            ref={nameRef}   
            value={name}
            placeholder='Enter the product...'
            onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
            value={price}
            placeholder='Enter the price...'
            onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <button onClick={handleSubmit}>Add</button>
        <br />
        Total: {total}
        <ul>
            {products.map((product, index) => (
            <li key={index}>
                {product.name} - {product.price}
            </li>
            ))}
        </ul>
        </div>
    )
}

export default App