import React from 'react'
import "./welcomePage.css"

const WelcomePage = () => {
  return (<article>
    <div className='WpContainer'>
      <div className='WpWrapper'>
        <div className='LeftBox'>
          <div className='TopBox'>
            <div className='TopHeadingBox'>
              <div className='OrangeLine'></div>
              <h1 className='HeadingText'>You’ll be buying the
                best products .</h1>
            </div>
            <div className='TopBottomBox'>
              <p className='Information'>
              Great raw materials,exceptional quality and unperalleled craftsmanship is what we give you. With our experince in the furniture business you will get awesome customer service .               
              </p>
            <div className='OrangeUnderline'></div>
            </div>
          </div>
          <div className='BottomBox'>
            <button className="NearestStoreBox"><p className='ButtonText'>NEAREST STORE</p></button>
            <div className="DownArrow"/>
          </div>

        </div>
        <div className='RightBox'>
          <div className="ImageWrapper">
            <div className="Image"></div>
          </div>
        </div>
        
      </div>
    </div>
  </article>
  )
}

export default WelcomePage