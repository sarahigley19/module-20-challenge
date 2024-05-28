import React from "react";
import Nav from "../Nav";
import logoSvg from "../../assets/logo.png";
import profileImage from "../../assets/headshot.jpg";


function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <div>
      <section>
        <header className="flex-row px-1">
          <div>
            <img src={logoSvg} style={{ width: "35%" }} alt="profile" />
          </div>
          <div>
            <Nav
              currentTab={currentTab}
              handleTabChange={handleTabChange}
            ></Nav>
          </div>
        </header>
      </section>
      <div id="main-body">
        <div class="main-body-text">
          
          <p>Hello! Welcome to my portfolio! My name is Sarah. I love podcasts, watching movies with my husband and playing with my two cats, Ralph and Maggie.</p>
          
          <p>I have been working in the eCommerce space since graduating college back in 2017. I've learned a lot in that time, most of which includes learning how to increase and maintain profitability, leading the buildout of multiple Shopify storefronts, creating a successful Amazon Proseller account and mentoring a team of exceptional employees.</p>
          
          <p>Recently though, I've decided to pivot my career by pursuing a career in web developement. Web development is something I've been interested in since taking one college class many years ago. I'm excited to start a new career where I can problem solve on a daily basis and foster creativity in my work.</p>
        </div>
        <div class="headshot">
            <img src={profileImage} style={{ width: "60%" }} alt="profile" />
          </div>
        </div>        
          </div>
  );
}

export default Header;
