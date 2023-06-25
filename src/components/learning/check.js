import React, { useState } from 'react';
import One from './one';
function MyFunction() {
    const [val, setVal] = useState(0)
    return (
        <div>
            <h1>{val}</h1>
            <button
                style={{ color: "red", backgroundColor: 'greenyellow' }}
                onClick={() => {
                    setVal(val + 1)
                }}
                onMouseOver={() => {
                    setVal(val + 1)
                }}
                onMouseOut={() => {
                    setVal(val - 1)
                }}
            >Press</button>
            <One></One>
        </div>
    )
}
export default MyFunction;