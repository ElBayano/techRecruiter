import React from "react"; 

import InputLog from '../../inputs/inputLog'
import Button from "../../buttons/buttonComponent"
import { Link } from "react-router-dom";
import { LoginPageStyle } from "./LoginPage.styled";
import FooterSession from "../../footerSession/footerSession"

function LoginPage() {


    return (
        <>
      <LoginPageStyle/>
    <div className='app'>
      <span className='logo'>PRH</span>
      <div className='container' style={{textAlign: "center"}}>
      <div className='container-login'>
          <InputLog type="text" placeholder="Email"/>
          <InputLog type="password" placeholder="Digite a sua senha"/>
        </div>
        
        <Link to="/inicio"> <Button>Entrar</Button> </Link>
        <p style={{color: "var(--gray-53)", marginTop: "0.5625rem", cursor: "pointer"}}>Esqueceu a senha?</p>
      </div>
    </div>
    <FooterSession/>
    </>
    )
}

export default LoginPage