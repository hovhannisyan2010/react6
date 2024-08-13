import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

function ShopSingle() {
    const [prod,setProd]=useState({})
    const prodId=useLocation().pathname.split('/')[2]
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${prodId}`)
      .then((res) => res.json())
      .then(res=>setProd(res))
  },[]);
  console.log(prod);
  if (prod.message) {
    return <div>
        {prod.message}
    </div>
  }
  
  return <div>
    <h1>{prod.title}</h1>
  </div>;
}

export default ShopSingle;
