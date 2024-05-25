import React, { useState } from 'react'

export const EmployeeComponent = () => {
    const [employee, setEmployee] = useState({name:"", country:""})
  return (
    <div>
        <input type="text"  value={employee.name} onChange={e => setEmployee({...employee, name: e.target.value})}/>
        <input type="text" value={employee.country} onChange={e => setEmployee({...employee, country: e.target.value})}/>

        <div>
            <p>My Name is {employee.name}</p>
            <p>I am from {employee.country}</p>
        </div>

        <div>
            {JSON.stringify(employee)}
        </div>
    </div>
  )
}
