import React, { useState } from 'react'

export default function CounterComponent () {

    const isLoggedIn = true;
    const [counter, setCounter] = useState(0);
    const [title, setTitle] = useState('React JS for Beginner.')
    if(isLoggedIn){
        setCounter(counter + 1)
    }
    else{
        setCounter(0)
    }
  return (
    <div>
        {/* <h1>{title}</h1> */}
        {/* <button onClick={e => setTitle('React Hook Courses.')}>Change Title</button> */}
        <h1>Click Counts {counter}</h1>
        <button onClick={e => setCounter(counter + 1)}>Click</button>
        <button onClick={e => setCounter(counter -1)}>Descrese</button>
        <button onClick={e => setCounter(0)}>Reset</button>

    </div>
  )
}
