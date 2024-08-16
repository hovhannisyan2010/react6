import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <Link to='/' className='link'>Home</Link>
      <Link to='/shop' className='link'>Shop</Link>
      <Link to='/contact' className='link'>Contact</Link>
    </header>
  )
}

export default Header
