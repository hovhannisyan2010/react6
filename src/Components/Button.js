import React, { useEffect, useState } from 'react'

function Button({addBt,prod}) {    
  return (
    <button onClick={()=>addBt(prod)}>
      Add to Cart
    </button>
  )
}

export default Button