import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" height={100}width={150}/>
                <p>At Zinger, we’re passionate about bringing delicious food to your doorstep—fast, fresh, and hassle-free. Whether you're craving a quick bite or a hearty meal, Zinger connects you with your favorite local restaurants and top-rated eateries. Our mission is simple: to deliver great food with exceptional service. With an easy-to-use platform and a wide variety of cuisines to choose from, Zinger makes every meal more enjoyable. Order now and experience the zing in every bite!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt=''/>
                    <img src={assets.twitter_icon} alt=''/>
                    <img src={assets.linkedin_icon} alt=''/>

                </div>

            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-7973865500</li>
                    <li>anshit985sharma@gmail.com</li>
                </ul>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                    

                </ul>
            </div>
           

        </div>
        <hr />
                    <p className='footer-copyright'>Copyright 2025 &copy; Zinger.com -All Rights Reserved </p>

      
    </div>
  )
}

export default Footer
