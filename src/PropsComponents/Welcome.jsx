import React from 'react'

const Welcome = ({fname, lname, age}) => {
    console.log(typeof fname, typeof lname, typeof age);
  return (
    <div>
        <h1>Welcome {fname} {lname}!</h1>
        <p>Age: {age}</p>
    </div>
  )
}

export default Welcome