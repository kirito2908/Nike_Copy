import React from 'react'
import { Header } from './Header'
import Footer from './Footer'

const Contact = () => {
  return (
    <div>
      <Header/>
        <div className="contactContainer">
          <div className="contact">
            <h3>Sign Up for <span>Updates</span> & Newsletter</h3>
            <div className="enterEmail">
              <input type="text" placeholder='subscribe@nike.com' />
              <div className="signButton">
                <button type='button'>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Contact
