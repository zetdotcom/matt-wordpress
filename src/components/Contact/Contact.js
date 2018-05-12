import React from 'react';
import Link from 'gatsby-link';

import BlueButton from '../../components/BlueButton/BlueButton';

import './Contact.scss';

const Contact = () => (
  <div className="sections-bg  ">
    <div className=" contact-page">
      <div className="contact-box">
        <div className="contact-box-form">

          <div className="form">

            <form method="POST" action="https://formspree.io/michal.zadarnowski@gmail.com">
              <h4>
                Get in touch</h4>
              <div className="form-row1">
                <input type="email" name="email"/>
                <input type="text" name="subject"/>
              </div>
              <input type="hidden" name="_next" value="//zetdotcom.github.io"/>

              <textarea name="message" type="text"/>
              <BlueButton label="submit" type="submit"/>
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
            <a>facebook</a>
            <a>Twitter</a>
            <a>Instagram</a>
          </div>

        </div>
      </div>
    </div>
  </div>
)
export default Contact;