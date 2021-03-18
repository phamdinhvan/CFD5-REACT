import React, { useState } from 'react'

export default function Demo({ num }) {
    let [count, setCount] = useState(num)

function _click() {
    setCount(count + 1)
}

    return (
        <div style={{marginTop : 100 , marginBottom : 100, textAlign : 'center'}}>
            {count} count <br/>
            <button onClick={_click}>Increment</button>
            
        </div>
    )
}
