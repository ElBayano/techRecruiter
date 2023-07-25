import React from "react";
import "/src/assets/icons/emailIcon.svg"
import "./inputLog.css"

export default function InputLog({type, placeholder}) {

    const email = "input-log-icon-email"
    const password = "input-log-icon-password"
    const srcImg = type === "password" ? "passwordIcon" : "emailIcon"
    const typeOfClass = type === "password"? password : email
    
return (
    <div className="container-input-log">
        <img src={`/src/assets/icons/${srcImg}.svg`} alt="icone de email" className={typeOfClass}/>
        <input type={type} className="input-log" placeholder={placeholder}></input>
    </div>
)}