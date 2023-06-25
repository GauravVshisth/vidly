import React, { useState } from 'react';
const One = () => {
    const [value1, setValue1] = useState()
    const [value2, setValue2] = useState()
    const [operator, setOperator] = useState()
    return (
        <div>
            <div style={{ borderColor: 'red', }}>
                <h1>{value1}</h1>
                <div>
                    <button style={{ height: 50, margin: 10, width: 50, margin: 10, borderRadius: 25 }}
                        onClick={() => setValue1(1)}>1</button>
                    <button onClick={() => setValue1(2)}
                        style={{ height: 50, margin: 10, width: 50, margin: 10, borderRadius: 25 }}>2</button>
                    <button onClick={() => setValue1(3)}
                        style={{ height: 50, margin: 10, width: 50, margin: 10, borderRadius: 25 }}>3</button>
                </div>
                <div>
                    <button onClick={() => setValue1(4)}
                        style={{ height: 50, margin: 10, width: 50, margin: 10, borderRadius: 25 }}>4</button>
                    <button onClick={() => setValue1(5)}
                        style={{ height: 50, margin: 10, width: 50, margin: 10, borderRadius: 25 }}>5</button>
                    <button onClick={() => setValue1(6)}
                        style={{ height: 50, margin: 10, width: 50, margin: 10, borderRadius: 25 }}>6</button>
                </div>
                <div>
                    <button onClick={() => setValue1(7)}
                        style={{ height: 50, margin: 10, width: 50, margin: 10, borderRadius: 25 }}>7</button>
                    <button onClick={() => setValue1(8)}
                        style={{ height: 50, margin: 10, width: 50, margin: 10, borderRadius: 25 }}>8</button>
                    <button onClick={() => setValue1(9)}
                        style={{ height: 50, margin: 10, width: 50, margin: 10, borderRadius: 25 }}>9</button>
                </div>
                <div>
                    <button style={{ height: 50, margin: 10, width: 50, margin: 10, borderRadius: 25 }}>0</button>
                    <button style={{ height: 50, margin: 10, width: 50, margin: 10, borderRadius: 25 }}>+</button>
                    <button style={{ height: 50, margin: 10, width: 50, margin: 10, borderRadius: 25 }}>-</button>
                </div>
                <div>
                    <button style={{ height: 50, margin: 10, width: 50, margin: 10, borderRadius: 25 }}>*</button>
                    <button style={{ height: 50, margin: 10, width: 50, margin: 10, borderRadius: 25 }}>/</button>
                    <button style={{ height: 50, margin: 10, width: 50, margin: 10, borderRadius: 25 }}>=</button>
                </div>
            </div>
        </div>
    );
}

export default One;