import React from 'react'
import Navbar from '../../components/navbar/Navbar.jsx'
import Bag from '../../components/Bag/Bag.jsx'
import WelcomePage from './singlePages/welcomePage/WelcomePage.jsx'
import ContactUs from './singlePages/contactUs/ContactUs.jsx'


const Homepage = () => {
  return (
    <main>
        <Navbar/>
        <WelcomePage/>
        <ContactUs/>
    </main>
  )
}

export default Homepage