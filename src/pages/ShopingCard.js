import React, { useEffect, useState } from 'react'
import "../App.css";
import DeleteProd from '../Components/DeleteProd';
import TotalPrice from '../Components/TotalPrice';
function ShopingCard() {
  const [prots,setProds] = useState(JSON.parse(localStorage.getItem("prots") )|| [])
  const [sum,setSum] = useState(0)
  useEffect(()=>{},[prots])
  function delRow(row){
    setProds(prots.filter((e) => e !== row));
    localStorage.setItem("prots", JSON.stringify(prots.filter((e) => e !== row)))
  }
  useEffect(()=>{},[prots])
  function total(){
    setSum(sum)
    localStorage.setItem("prots", JSON.stringify(prots.filter((e) => e !== row)))
  }
  return (
    <div className='shoping'>
        <table>
          <thead>
            <tr>
            <th>id</th>
            <th>title</th>
            <th>price</th>
            </tr>
          </thead>
          <tbody>
              {
                prots.map((e)=>{
                  return <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.title}</td>
                    <td>{e.price}$</td>
                   <td><DeleteProd delRow={delRow} row={e}/></td>
                  </tr>
                })
              }
          </tbody>
        </table>
              <TotalPrice total={total}/>
    </div>
  )
}

export default ShopingCard