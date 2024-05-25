import React from 'react'

export const ProductListComponent = () => {

    const products = [
        {
            id:1,
            name:'Apple',
            price:2000
        },
        {
            id:2,
            name:'Orange',
            price:1000
        },
        {
            id:3,
            name:'Mango',
            price:500
        }
    ]
  return (
    <div>
        
        { //() ဆိုရင် auto return ပြန်တယ် {} ဆိုရင် return ရေးပေးရတယ်
            products.map(p => {
             return   <ul key={p.id}>
                <li>{p.id}</li>
                <li>{p.name}</li>
                <li>{p.price}</li>
                </ul>
            })
        }
       
    </div>
  )
}
