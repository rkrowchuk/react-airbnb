import React from 'react';
import star from "../images/star.png";
import katie from "../images/katie-zaferes.png";

export default function Card() {
  return (
    <div className="card">
      <img src={katie} className="card-image"/>
      <h4 className='card-banner'>Sold Out</h4>
      <div className="card-stats">
        <img src={star} className='star-img'/>
        <span>5.0</span>
        <span className="stat-faded">(6)</span>
        <span className="stat-faded"> • </span>
        <span className="stat-faded"> USA</span> 
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p><b>FROM $136</b> / person</p>
    </div>
  )
}
