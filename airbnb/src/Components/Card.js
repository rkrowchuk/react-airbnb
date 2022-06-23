import React from 'react';
import star from "../images/star.png";

export default function Card(props) {
  let badgeText;
  if (props.card.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.card.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      <img src={require(`../../public/images/${props.card.coverImg}`)} className="card-image"/>
      {badgeText && <h4 className='card-banner'>{badgeText}</h4>}
      <div className="card-stats">
        <img src={star} className='star-img'/>
        <span>{props.card.stats.rating}</span>
        <span className="stat-faded">{props.card.stats.reviewCount}</span>
        <span className="stat-faded"> • </span>
        <span className="stat-faded"> {props.card.location}</span> 
      </div>
      <p>{props.title}</p>
      <p><b>FROM ${props.card.price}</b> / person</p>
    </div>
  )
}
