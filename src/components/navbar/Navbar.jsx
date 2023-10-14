import React from 'react'
import "./navbar.css"
import Bag from '../Bag/Bag'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='NavbarContainer'>
      
      <div className='NavbarWrapper'>
        <div className='LogoBox'>
          <Link to="/">
            <div className='Logo'></div>
          </Link>
        </div>
        <div className='NavbarLinksBox'>
          <Link to="/Furniture" className='NavLinks'>
            <p >Furniture</p>
          </Link>
          <Link to="/Shop" className='NavLinks'>
            <p >Shop</p>
          </Link>
          <p className='NavLinks'>About us</p>
          <p className='NavLinks'>Contact us</p>
          <Link to="/checkout">
      <Bag />
      </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar