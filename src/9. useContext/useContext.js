/**
 * -----------------------------------------------------------------------------
 * ---------------------------- useContext Hook --------------------------------  
 *       CompA => CompB => ComC     
 *          - B1: Create context
 *          - B2: Provider
 *          - B3: Consumer   
 */
import { useState, createContext, useContext } from 'react'

// 1. Create context
const UserContext = createContext()    

function Component1() {
    const [user] = useState('Jesse Hall')

// 2. Provider (cung cấp dữ liệu)
    return (
        <UserContext.Provider value={user}>      
            <h1>{`Hello ${user}!`}</h1>
            <Component2 />
        </UserContext.Provider>
    )
}

function Component2() {
    return (
        <>
            <h1>Component 2</h1>
            <Component3 />
        </>
    )
}

function Component3() {
    // 3. Consumer (Nhận dữ liệu)
    const user = useContext(UserContext)

    return (
        <>
            <h1>Component 3</h1>
            <h2>{`Hello ${user} again!`}</h2>
        </>
    )
}

export default Component1