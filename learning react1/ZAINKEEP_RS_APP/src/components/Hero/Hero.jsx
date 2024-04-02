import React from 'react'
import "./Hero.css";
const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">


            <div className=" flexColCenter hero-left">
                <div className="hero-title">

                  <h1>Find  Your <br/> Private Room at <br/>
                  Any time </h1>
                </div>
            </div>

            <div className=" flexColStart hero-des">
              <span>Find a varitey of  private room of you can afford </span>
              <span>Yes it is easy to find the ROOMS at cheap rate. </span>
            </div>

            <div className="search-bar">
              search bar
            </div>

            <div className=" flexCenter hero-right">
                 <div className="image-container">
                       <img src='./hero-image.png' alt='' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero