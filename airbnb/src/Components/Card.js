import React from 'react';
import star from "../images/star.png";
import katie from "../images/katie-zaferes.png";

export default function Card() {
  return (
    <div>
      <img src={katie} className="card-image"/>
      <h4 className='card-banner'>Sold Out</h4>
      <div className="card-rating">
        <img src={star} />
        5.0 (6)•USA
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p><b>FROM $136</b> / person</p>
    </div>
  )
}
