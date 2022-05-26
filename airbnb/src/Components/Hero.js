import React from 'react';
import grid from "../images/photo-grid.png";

export default function Hero() {
  return (
    <div className="hero-container">
      <img src={grid} className='hero-grid-img'/>
      <h1>Online Experiences</h1>
      <h5>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</h5>
    </div>
  )
}
