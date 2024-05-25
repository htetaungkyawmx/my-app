import React, { useEffect, useState } from 'react'

export const FruitsComponent = () => {
    const [fruitName, setFruitname] = useState("");
    const [fruit, setFruit] = useState([])

    const addFruit = () => [
        setFruit([...fruit,{
            id: fruit.length,
            name: fruitName
        }])
    ]

    useEffect(() => {
        console.log('Use Effect Called.')
    }, [fruit])
  return (
    <div>
        <input type="text" value={fruitName} onChange={e => setFruitname(e.target.value)} />
        <button onClick={e => addFruit()}>Add</button>

        <div>
            {
                fruit.map( f => (
                    <ul key={f.id}>
                       <li> {f.id + 1} : {f.name}</li>
                    </ul>
                ))
            }
        </div>
    </div>
  )
}
