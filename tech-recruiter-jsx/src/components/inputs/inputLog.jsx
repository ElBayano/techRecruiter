import React from "react";
// import "../../assets/icons/emailIcon.svg"
// import "../../assets/icons/passwordIcon.svg"
import "./styles"
import { LoginIcon, Input, ContainerInput, } from "./styles";

export default function InputLog({type, placeholder}) {

    const email = "input-log-icon-email"
    const password = "input-log-icon-password"
    const srcImg = type === "password" ? "passwordIcon" : "emailIcon"
    const typeOfClass = type === "password"? password : email
    
return (
    <ContainerInput>
        <LoginIcon src={`/src/assets/icons/${srcImg}.svg`} alt="icone de email" className={typeOfClass}/>
        <Input type={type} className="input-log" placeholder={placeholder}></Input>
    </ContainerInput>
)}