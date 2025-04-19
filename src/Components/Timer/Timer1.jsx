import React, { useEffect, useState } from 'react'

const Timer1 = () => {
    const date = new Date()

    const [time, setTime] = useState(date.toLocaleTimeString())

    useEffect(() => {   
        console.log("hi"); // this will run only once when the component mounts if added [] dependency array
        // console.log("hi"); // this will run every time the component re-renders if we remove [] dependency array 
        const interval = setInterval(() => {
            const date = new Date()
            setTime(date.toLocaleTimeString())
        }, 1000)
        
        return () => clearInterval(interval)
    
    }
    , [] // this will run only once when the component mounts if added [] dependency array
    // , [time] // this will run every time the component re-renders if we remove [] dependency array
)

    return (
        <div>Time: {time}</div>
    )
}

export default Timer1