import React from "react";
import "./about.scss";

const About = () => {
    return (
      <div className="about">
        <div className="content">
          <h1>About Us</h1>
          <img src="/images/about-display.jpeg" alt="Boutique with clothing rack" />
          <p>Welcome to Tangerine, a modern clothing and accessories boutique 
            with products designed and curated by owner, Sarah Shu. Tangerine 
            specializes in contemporary style with a vintage feel, giving 
            people from all backgrounds a place to tell their stories. The 
            little things are the biggest sources of inspiration; a quiet picnic 
            for one on a warm autumn day.
          </p>
          <video src="/videos/about-video.mp4" width="800" height="450" controls="controls" autoplay="false" />
        </div>
      </div>
    );
}

export default About;