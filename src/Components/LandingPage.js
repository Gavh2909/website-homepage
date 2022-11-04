import React from "react";
import "./LandingPageStyles.css";
export default function Navbar() {
  return (
    <div className="main">
      <div className="navbar">
        <div className="icon">
          <h2 className="logo">LandingPage</h2>
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Design</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="search">
          <input
            type="text"
            className="srch"
            name=""
            placeholder="Type to Search"
          />
          <a href="#">
            <button className="btnn">Search</button>
          </a>
        </div>
      </div>
      <div className="content">
        <h1>
          Web Design & <br /> <span>Development</span> <br />
          Course
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint soluta incidunt qui,
          <br />architecto quo asperiores,quod etdolor ullam ducimus  omnis harum,<br /> 
          atque nesciunt magni neque molestias repudiandae.</p>

        <button className="cn"><a href="#">Join US</a></button>
        <div className="form">
          <h2>Login</h2>
          <input type="email" name="email" placeholder="Enter Email Here" />
          <input type="password" name="password" placeholder="Enter Password Here" />
          <button className="btn"><a href="#">Login</a></button>

          <p className="link">Don't have an account <br />
          <a href="#">Sign Up</a> Here</p>
          <p className="liw">Log in With</p>
          
          {/* <div className="icons">
            <a href="#">F</a>
            <a href="#">G</a>
            <a href="#">T</a>
            <a href="#">I</a>
            <a href="#">S</a>
          </div> */}
        </div>
      </div>
     
    </div>
    
  );
}
