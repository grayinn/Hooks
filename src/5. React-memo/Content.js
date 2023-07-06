// --------------- Content.js
// Use React.memo
import { memo } from 'react'

function Content() {
    return (
        <h1>Hello World!</h1>
    )
}
export default memo(Content)