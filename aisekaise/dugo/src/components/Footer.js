import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a href="https://www.instagram.com/anuragkeshri29/"><InstagramIcon /></a>
      <a href="https://twitter.com/keshri029"><TwitterIcon /></a>
       <a href="https://stackoverflow.com/users/21105531/anurag-keshri"><stackoverflown /></a>
        <a href="https://www.linkedin.com/in/anurag-keshri-aab8a61a7/"><LinkedInIcon /></a>
          </div>
      <p>https://keshrianurag.netlify.app/</p>
    </div>
  );
}

export default Footer;
