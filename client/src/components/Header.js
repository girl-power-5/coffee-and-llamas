import React from "react"


export default function Header(props) {
    const date = new Date ()
    const hours = date.getHours()
    let timeOfDay
      
    if (hours <12) {
      timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon"
    } else {
      timeOfDay = "night"
    }

    return (

    <h1 className="header">Good {timeOfDay}, {props.username}</h1>
         
    )
}