import React from 'react'
import Logo from '../icons_assets/Logo.svg'
import './Header.css'
import Nav from './Nav'

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Little Lemon logo" />
      <Nav />
    </header>
  )
}

export default Header