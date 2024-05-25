import React from 'react'

export default function DemoComponent({name, country, children}) {

    // console.log(props)
    // props.name = 'That Shwe Win'

  return (
    <div>
        <h1>Hello World</h1>
        <h2>My Name is {name}.</h2>
        <h2>I am from {country}.</h2>

        <div>{children}</div>
    </div>
  )
}
