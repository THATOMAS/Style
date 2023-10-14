import React from 'react'
import ShopNavbar from '../../../../components/ShopNavbar/ShopNavbar'
import "./furniture.css"
import SingleSlider from '../../../../components/singleSlider/SingleSlider'
const Furniture = () => {
  return (
    <div>
        <ShopNavbar/>
        <div className="FurnitureContainer">
          <div className="CategoriesContainer">
            <div className="CategoriesWrapper">
              <button className="">Dinning</button>
              <button className="">Sitting</button>
              <button className="">Lighting</button>
            </div>
            <div className="UnderLine"></div>
          </div>
          <div className="ResultsContainer">
            <div className="Left">Left</div>
            <SingleSlider/>
            <SingleSlider/>
            <SingleSlider/>
            <SingleSlider/>
            <div className="Right">Right</div>
          </div>
        </div>
    </div>
  )
}

export default Furniture