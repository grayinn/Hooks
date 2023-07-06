// ------------------------- Content.js - useCallback
// Use React.memo
import { memo } from 'react'

function Content({ onIncrease }) {

    console.log('re-render')

    return (
        <>
            <h1>Hello World!</h1>
            <button onClick={onIncrease}>Click me!</button>
        </>
    )
}
export default memo(Content)