import React from 'react'

export default function EventHandlingComponent() {

    function clickHandler(){
        const clickHandler = () => console.log('You Click action button.')
        console.log('You Click action button.')
    }
  return (
    <div>
        {/* <button onClick={clickHandler}>Action</button> */}
        {/* sameWay */}
        <button onClick={e => clickHandler()}>Action</button> 
    </div>
  )
}
