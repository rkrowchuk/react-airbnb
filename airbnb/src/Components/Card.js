import React from 'react';
import star from "../images/star.png";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      <img src={props.img} className="card-image"/>
      {badgeText && <h4 className='card-banner'>{badgeText}</h4>}
      <div className="card-stats">
        <img src={star} className='star-img'/>
        <span>{props.rating}</span>
        <span className="stat-faded">{props.reviewCount}</span>
        <span className="stat-faded"> • </span>
        <span className="stat-faded"> {props.location}</span> 
      </div>
      <p>{props.title}</p>
      <p><b>FROM ${props.price}</b> / person</p>
    </div>
  )
}
