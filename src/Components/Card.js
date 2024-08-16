import React from 'react'
import { Link } from 'react-router-dom'

function Card({ title, image, id }) {
  return (
    <Link to={`./${id}`} className='card'>
      <img src={image} />
      <h2>{title}</h2>
    </Link>
  )
}

export default Card