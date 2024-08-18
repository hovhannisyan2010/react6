import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
function Card({prod,addBt}) {
  return (
    <div>
    <Link to={`./${prod.id}`} className='card'>
      <img src={prod.images[0]} />
      <h2>{prod.title}</h2>
    </Link>
    <Button addBt={addBt} prod={prod} />
    </div>
  )
}

export default Card