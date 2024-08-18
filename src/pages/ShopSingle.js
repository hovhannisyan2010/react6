import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ShopSingle() {
  const [prod, setProd] = useState({})
  const prodId = useParams().id
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${prodId}`)
      .then((res) => res.json())
      .then(res => setProd(res))
  }, []);
  if (prod.message) {
    return <div>
      {prod.message}
    </div>
  }
  return <div>
    <div className='singleParent'>
      <img src={prod.images ? prod.images[0] : ""} />
      <div className='information'>
        <h1>{prod.title}</h1>
        <h3>{prod.description}</h3>
        <h3>price: {prod.price}$</h3>
      </div>
    </div>;
  </div>
}

export default ShopSingle;


// import React from 'react'

// function SingleCard({image,title,text,price}) {
//   return (
    // <div className='singleParent'>
    //     <img src={image}/>
        // <div className='information'>
        //     <h1>{title}</h1>
        //     <h3>{text}</h3>
        //     <h3>price:  {price}$</h3>
        // </div>
//     </div>
//   )
// }

// export default SingleCard