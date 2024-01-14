import React from "react"
import star from './images/star.png'
import './style.css'

export default function Card(props) {
    console.log(props.item)
    let badgeText
    if (props.item.openSpots === 0){
        badgeText = 'SOLD OUT'
    }else if (props.item.location === 'Online'){
        badgeText = 'ONLINE'
    }
        //if badge text exists or has a real value then i want u to display {badgetext} t
    return (
        <div className="card">
            {badgeText && <div  className="card--badge">{badgeText} </div>}
            
            <img src= {props.item.coverImg} alt='img' className="card--image" />
            <div className="card--stats">
                <img src= {star} alt="star" className="card--star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}