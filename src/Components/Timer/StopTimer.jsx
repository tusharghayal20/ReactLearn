// import React, { useEffect, useState } from 'react'

// const StopTimer = () => {
//     const [count, setCount] = useState(0)

//     useEffect(() => {
//         setCount(count + 1)   // will go infinite loop
//     })

//     useEffect(() => {
//         setCount(count + 1)   
//     },[count]) // will go infinite loop

//   return (
//     <div>
//         <h1>{count}</h1>
//     </div>
//   )
// }

// export default StopTimer
// =====================================================================================================================
// import React, { useEffect, useState } from 'react'

// const StopTimer = () => {
//     const [count, setCount] = useState(0)

//     useEffect(() => {
//         setCount(count + 1)
//     },[count]) // this will go infinite loop

//   return (
//     <div>
//         <h1>{count}</h1>
//     </div>
//   )
// }

// export default StopTimer
// =====================================================================================================================
import React, { useEffect, useState } from 'react'

const StopTimer = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('useEffect called');
        
       const interval = setInterval(() => {
            // setCount(count + 1)
            setCount(pre => pre + 1)
        }, 1000)

        console.log(interval);
      
        return () => {
            clearInterval(interval)
        }

    },[]) // remove and check the dependency
//     The setInterval callback uses the functional form of setCount, which React guarantees will always have access to the latest state value (pre).
// This eliminates the need to re-run the useEffect on every state change, as the state updates are handled internally by React

  return (
    <div>
        <h1>{count}</h1>
    </div>
  )
}

export default StopTimer
/* =====================================================================================================================
State Update with Functional Form (setCount(pre => pre + 1)):

Inside the setInterval callback, the setCount function is called using its functional form: setCount(pre => pre + 1).
This functional form ensures that the state update is based on the previous state value (pre), rather than relying on the current value of count from the closure.
This avoids the need to include count in the dependency array, as the functional form does not depend on the count variable from the outer scope.
Empty Dependency Array ([]):

The empty dependency array means the useEffect runs only once, when the component is mounted.
The setInterval is set up during this initial render, and it keeps running independently of React's re-renders.

Why It Works Without Dependencies:
The setInterval callback uses the functional form of setCount, which React guarantees will always have access to the latest state value (pre).
This eliminates the need to re-run the useEffect on every state change, as the state updates are handled internally by React

Cleanup with clearInterval:
The return statement in the useEffect ensures that the interval is cleared when the component is unmounted, preventing memory leaks.
// ===================================================================================================================== */

// import React, { useEffect, useState } from 'react'

// const StopTimer = () => {

//     const [count, setCount] = useState(0)

//     const [isActive, setIsActive] = useState(false)
//     const [isPaused, setIsPaused] = useState(false)

//     useEffect(() => {
//         let interval = null

//         if (isActive && !isPaused) {
//             interval = setInterval(() => {
//                 setCount(count => count + 1)
//             }, 1000)
//         } else if (!isActive && count !== 0) {
//             clearInterval(interval)
//         }
//         return () => clearInterval(interval)
//     }, [isActive, isPaused, count])

//     return (
//         <div>
//             <h1>Stop Timer</h1>
//             <h1>{count}</h1>
//             <button onClick={() => setIsActive(!isActive)}>{isActive ? 'Pause' : 'Start'}</button>
//             <button onClick={() => setIsPaused(!isPaused)}>{isPaused ? 'Resume' : 'Pause'}</button>
//             <button onClick={() => setCount(0)}>Reset</button>
//             <button onClick={() => setIsActive(false)}>Stop</button>
//         </div>
//     )
// }

// export default StopTimer