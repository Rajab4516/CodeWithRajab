import React from 'react';
import bannerImage from './images/banner-image.png';

export default function Banner() {
  return (
    <>
      <div className="banner-main-container">
        <div className="banner-col-1">
            <div className="col-1-text">
              <h1>Code With <span>Rajab</span></h1>
              <p>Welcome to my coding portfolio! Here, you’ll find a showcase of my projects, skills, and passion for technology. I believe that every line of code is a step toward creating something meaningful. Whether you're a potential collaborator, a future employer, or just curious about my work, I’m excited to share my journey with you. Let’s explore how we can transform ideas into impactful digital solutions together!</p>
              <div className="banner-col-1-button-container">
                <button id="fiver-btn">Hire me on Fiver</button>
                <button id="upwork-btn">Hire me on UpWork</button>
                <button id="email-btn">Email</button>
              </div>
            </div>
        </div>
        <div className="banner-col-2">
          <img src={bannerImage} alt="" />
        </div>
      </div>
    </>
  )
}
