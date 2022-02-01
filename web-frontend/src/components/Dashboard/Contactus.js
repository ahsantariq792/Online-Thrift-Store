import '../../App.css';
import React, { useEffect, useState } from 'react';

import { baseurl } from '../../core';
import axios from 'axios';
function Contactus() {
  var [username,setusername]=useState('')
  var [phone,setphone]=useState('')
  var [email,setemail]=useState('')
  var [message,setmessage]=useState('')

  return (
    <>
      <div class="contact-container">

        <span class="big-circle"></span>

        <img src="img/shape.png" class="square" alt="" />

        <div class="contact-form">

          <div class="contact-info">

            <h3 class="contact-title">Let's get in touch</h3>
            <p class="contact-text">
              This store will facilitate the entire loan lifecycle, and can help many people around the world that are unbanked and can't
              access the financial services they need.
            </p>

            <div class="contact-info">
              <div class="contact-information">
                {/* <!-- <img src="img/location.png" class="contact-icon" alt="" /> --> */}
                <p>Main Road Block 22, Karachi</p>
              </div>
              <div class="contact-information">
                {/* <!-- <img src="img/email.png" class="contact-icon" alt="" /> --> */}
                <p>Loanproviders@gmail.com</p>
              </div>
              <div class="contact-information">
                {/* <!-- <img src="img/phone.png" class="contact-icon" alt="" /> --> */}
                <p>+9280089754</p>
              </div>
            </div>

            <div class="contact-social-media">
              <p>Connect with us :</p>
              <div class="contact-social-icons">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="contact-form-main">

            <span class="circle one"></span>
            <span class="circle two"></span>

            <form class="form-body">

              <h3 class="contact-title">Contact us</h3>
              <div class="contact-input-container">
                <input type="text" name="name" placeholder="Username" class="contact-input" />
                {/* <!-- <label for="">Username</label> --> */}
                {/* <!-- <span>Username</span> --> */}
              </div>
              <div class="contact-input-container">
                <input type="email" name="email" placeholder="Email" class="contact-input" />
                {/* <!-- <label for="">Email</label> --> */}
              </div>
              <div class="contact-input-container">
                <input type="tel" name="phone" placeholder="Phone" class="contact-input" />
                {/* <!-- <label for="">Phone</label> --> */}
              </div>
              <div class="contact-input-container contact-textarea">
                <textarea name="message" class="contact-input" placeholder="Message"></textarea>
                {/* <label for="">Message</label>
        <span>Message</span> */}
              </div>
              <input type="submit" value="Send" class="contact-btn" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactus;