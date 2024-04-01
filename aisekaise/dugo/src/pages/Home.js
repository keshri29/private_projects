import React from "react";
// import Link from '@material-ui/core/Link';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi,My Name is Anurag</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
         <a href="https://www.linkedin.com/in/anurag-keshri-aab8a61a7/"><LinkedInIcon /></a>
        <a href="mailto:keshrianurag690@gmail.com"><EmailIcon /></a>
          <a href="https://github.com/keshri29"><GithubIcon /></a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span className="lang">
              ReactJS,Angular,HTML,CSS,NPM,BootStrap,StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span className="lang">
              NodeJS,.NET, ExpressJS, GraphQL,MySQL, MongoDB
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span className="lang">JAVASCRIPT, C,C++,PHP,SQL,HTML,CSS,NOSQOL,</span>
          </li>
        </ol>
      </div>
    </div>
  
  );
}

export default Home;
