import React from 'react'
import Bag from '../Bag/Bag'
import "./shopNavbar.css"
import { Link } from 'react-router-dom'



const ShopNavbar = () => {
  return (
    <div className="ShopNavbarContainer">
         <div className="NavWrapper"> 
            <Link to="/" style={{textDecoration:"none"}}>
            <div className="ShopLogoBox"/>
            </Link>
            <div className="SearchBarContainer">
                <form action="" className="SearchForm">
                <input type="text" className="SearchBarInput" placeholder='Search Furniture ...'>
                </input>
                <button className="SearchBarButton"></button>
                </form>
            </div>
            <Bag/>
         </div> 
    </div>
  )
}

export default ShopNavbar