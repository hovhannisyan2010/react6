import React, { useEffect, useState } from 'react'
import "../App.css";
import DeleteProd from '../Components/DeleteProd';
import TotalPrice from '../Components/TotalPrice';
import DelAll from '../Components/DelAll';
function ShopingCard() {
  const [prots,setProds] = useState(JSON.parse(localStorage.getItem("prots") )|| [])
  useEffect(()=>{},[prots])
  function delRow(row){
    setProds(prots.filter((e) => e !== row));
    localStorage.setItem("prots", JSON.stringify(prots.filter((e) => e !== row)))
  }

  useEffect(()=>{},[prots])
  function delAll(){
    setProds(prots.filter((e) => e === {}));
    localStorage.setItem("prots", JSON.stringify(prots.filter((e) => e === {})))
  }

  useEffect(()=>{},[prots])
  function total(){
    return prots.reduce((res,e)=>{
      res+= e.price
      return res
    },0)
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
                prots.map((e,i)=>{
                  return <tr key={i}>
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
          <DelAll delAll={delAll}/>
    </div>
  )
}

export default ShopingCard