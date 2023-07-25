import { useState } from 'react'
import './App.css'

import InputLog from './components/inputs/inputLog'
import Button from "./components/buttons/buttons"
function App() {

  return (<>
    <div className='app'>
      <span className='logo'>ATS</span>
      <div className='container' style={{textAlign: "center"}}>
      <div className='container-login'>
          <InputLog type="text" placeholder="Email"/>
          <InputLog type="password" placeholder="Digite a sua senha"/>
        </div>
        <Button className="submit-form">Entrar</Button>
        <p style={{color: "var(--gray-53)", marginTop: "0.5625rem"}}>Esqueceu a senha?</p>
      </div>
    </div>
        <div className='styled-footer'></div>
        </>
  )
}

export default App
