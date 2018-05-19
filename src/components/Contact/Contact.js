import React from 'react';
import Link from 'gatsby-link';

import BlueButton from '../../components/BlueButton/BlueButton';
import {FacebookIcon, InstaIcon} from '../SocialIcons/SocialIcons';

import './Contact.scss';

const Contact = () => (
  <div className="sections-bg">
    <div className=" contact-page" id="contact">
      <div className="contact-box">
        <div className="contact-box-form">

          <div className="form">

            <form method="POST" action="https://formspree.io/michal.zadarnowski@gmail.com">
              <h4>
                Get in touch</h4>
              <div className="form-row1">
                <input type="text" name="name" placeholder="Name"/>
                <input type="email" name="email" placeholder="Email"/>
              </div>
              <input type="hidden" name="_next" value="//zetdotcom.github.io"/>

              <textarea name="message" type="text" placeholder="Message"/>
              <div className="blue-button-form">
                <BlueButton label="submit" type="submit"/></div>
            </form>
          </div>

        </div>
        <div className="contact-box-info">
          <div>
            <h4>Phone</h4>
            <p>01234567</p>
          </div>
          <div>
            <h4>Email</h4>
            <p>
              mattwlifecoach@gmail.com</p>
          </div>
          <div>
            <h4>Social</h4>
            <ul>
              <li>
                <FacebookIcon/>
              </li>
              <li>
                <InstaIcon/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Contact;