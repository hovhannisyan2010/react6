import React from 'react'
import "../App.css";
function ShopingCard() {
  let prots = JSON.parse(localStorage.getItem("prots"));

  return (
    <div className='shoping'>
        <table>
          <thead>
            <th>id</th>
            <th>title</th>
            <th>price</th>
          </thead>
          <tbody>
              {
                prots.map((e)=>{
                 return <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.title}</td>
                    <td>{e.price}$</td>
                  </tr>
                })
              }
          </tbody>
        </table>
    </div>
  )
}

export default ShopingCard