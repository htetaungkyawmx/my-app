import React from 'react'

export const ConditionalRendering = () => {

    // const isLoggedIn = true;
    const isLoggedIn = false;

  return (
    <div>
        {
            isLoggedIn ? <h1>Welcome to Our React Page</h1>
            : <h1>You must logged in first.</h1>
        }
    </div>
  )
}
