import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Shop() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then(res=>setData(res.products));
  },[]);
  return (
    <div>
      <h1>Shop</h1>
      {data.map((e)=>{
       return <div key={e.id}>
            <Link to={`${e.id}`} >{e.title}</Link>
        </div>
      })}
    </div>
  );
}

export default Shop;
