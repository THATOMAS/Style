import React from 'react'
import "./contactUs.css"

const reviewImg = require("./../../../../assets/reviewImage.png")

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
                  <div className="SocialLogo phone" />
                  <div className="SocialLogo email" />
                  <div className="SocialLogo insta" />
                  <div className="SocialLogo facebook" />
                  <div className="SocialLogo whatsapp" />
                </div>
              </div>
            </div>
            <div className="ContactUsRightBox">
              <div className="ReviewsContainer">
                <div className="ReviewsWrapper">
                  <h1 className="ReviewsHeading">Testimonials & Reviews</h1>
                  <div className="SmallArrow Up"></div>
                  <div className="ImageContainer">
                    <div className="ImageBoxWrapper">
                      <div style={{
                        background: `url(${reviewImg})`,
                        height: "100px",
                        width: "100px",
                        backgroundPosition: "center",
                        backgroundSize: "cover"
                      }} className='SmallPhoto' />
                      <h3 className="PersonName">Thato Mashori</h3>
                      <h4 className="JobTitle">Front End Developer</h4>
                      <p className="TestimonyText">
                      “Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“
                      </p>
                      <div className="StarRatingBox">
                        <p className="StarRating">5</p>
                        <div className="StarRatingImage"></div>
                      </div>
                    </div>
                  </div>
                  <div className="SmallArrow Down"></div>
                </div>
              </div>
            </div>
            <div className="DownArrowBox"></div>
          </div>
        </div>
      </div>
        <p>Copyright Thato Mashori 2023</p>
    </article >
  )
}

export default ContactUs