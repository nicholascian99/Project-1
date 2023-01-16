import React from "react"

export default function Offers(props) {
  let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }




  
  return (
    <div className="Offers">
      {badgeText && <div className="Offers--badge">{badgeText}</div>}
      <img src={`../public/Images/${props.item.coverImg}`} className="Offers--img" />
      <div className="Offers--stats">
        <ion-icon name="star-half-outline"></ion-icon>
        <span className="grey">{props.item.stats.rating}</span>
        <span className="grey">({props.item.stats.reviewCount})</span>
        <span>{props.item.location}</span>
      </div>
      <p>{props.item.title}</p>
      <p className="Offers--price"><span className="bold">From ${props.item.price}</span> / person</p>
    </div>
  )
}