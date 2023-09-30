import React from 'react'
import "./contactUs.css"

const ContactUs = () => {
  return (
    <article>
      <div className="ContactUsContainer">
        <div className="ContactUsWrapper">
          <div className="ArrowBox">
            <div className="UpArrow"></div>
          </div>
          <div className="ContactUsContent">
            <div className="ContactUsLeftBox">
              <div className="HeadingBox">

                <div className='GreenLine'></div>
                <h1 className='HeadingText'>What is
                  Space Furniture All About ?</h1>
              </div>

              <div className="InfoBox">
                <p className="InfoText">
                  At space furnitures we source the best products and
                  materials around the world because we understand
                  that its all about raw material quality and exceptional
                  craftsmanship .We are a company who believes in
                  creating dreamy spaces for people,spaces that
                  make you want to stay .
                </p>
              </div>
              <div className="GreenUnderline" />
              <div className="ContactBox">
              <h1 className="ContactHeading">Contact us</h1>
              <div className="LogoBoxes">
                <div className="SocialLogo phone"/>
                <div className="SocialLogo email"/>
                <div className="SocialLogo insta"/>
                <div className="SocialLogo facebook"/>
                <div className="SocialLogo whatsapp"/>
              </div>
            </div>
            </div>
            
          </div>
          <div className="ContactUsRightBox">
            <div className="ReviewsContainer">
              <h1 className="ReviewsHeading"></h1>
              <div className="SmallUpArrow"></div>
              <div className="ImageContainer">
                <div className="ImageBoxWrapper">
                  <div className="SmallPhoto"></div>
                  <h3 className="PersonName"></h3>
                  <h4 className="JobTitle"></h4>
                  <p className="TestimonyText"></p>
                  <div className="StarRating"></div>
                </div>
              </div>
              <div className="DownArrowBox"></div>

            </div>
          </div>
        </div>
      </div>

    </article >
  )
}

export default ContactUs