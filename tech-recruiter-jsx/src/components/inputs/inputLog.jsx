import React from "react";
import "/src/assets/icons/emailIcon.svg"
import "./inputLog.css"

export default function InputLog(props) {

    const email = "input-log-icon-email"
    const password = "input-log-icon-password"
    const srcImg = props.type === "password" ? "passwordIcon" : "emailIcon"
    
return (
    <div className="container-input-log">
        <img src={`/src/assets/icons/${srcImg}.svg`} alt="icone de email" className={props.type === "password"? password : email}/>
        <input type={props.type} className="input-log" placeholder={props.placeholder}></input>
    </div>
)}