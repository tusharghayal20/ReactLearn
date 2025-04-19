import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    };
    const decrement = () => {
        setCount(count - 1)
    };

    const reset = () => setCount(0);

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement} style={{ margin: '0 10px' }}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default Counter;


// import React, { useState } from 'react';

// const Counter = () => {
//     const counter = useState(0);

//     const increment = () => {
//         counter[1](counter[0] + 1)
//     };
//     const decrement = () => {
//         counter[1](counter[0] - 1)
//     };

//     const reset = () => counter[1](0);

//     return (
//         <div style={{ textAlign: 'center', marginTop: '20px' }}>
//             <h1>Counter: {counter}</h1>
//             <button onClick={increment}>Increment</button>
//             <button onClick={decrement} style={{ margin: '0 10px' }}>Decrement</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );
// };

// export default Counter;