import React from 'react'
import "./navbar.css"
import Bag from '../Bag/Bag'


const Navbar = () => {
  return (
    <div className='NavbarContainer'>
      <Bag/>
        <div className='NavbarWrapper'>
            <div className='LogoBox'>
                <div className='Logo'></div>
            </div>
            <div className='NavbarLinksBox'>
                <p className='NavLinks'>Furniture</p>
                <p className='NavLinks'>Shop</p>
                <p className='NavLinks'>About us</p>
                <p className='NavLinks'>Contact us</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar