import React from 'react'
import cssModules from './myAppStyle.module.css'

export const RegularCss = () => {

    const heading = {
        textAlign:'center',
        color:'tomato'
    }

    const heading2 = {
        textAlign:'center',
        color:'blue'
    }

  return (
    <div>
        <h1 style={heading}>This is The Way !  </h1>
        <h2 style={heading2}>Luke! I am your father.</h2>
        <h2 className={cssModules.error}>Error Message</h2>
        <h2 className={cssModules.success}>Success Message</h2>
    </div>
  )
}
