import { useState } from 'react'
import './App.css'

import InputLog from './components/inputs/inputLog'
import Button from "./components/buttons/buttons"
function App() {

  return (
    <div className='app'>
      <div className='container-login'>
        <InputLog type="text" placeholder="Email"/>
        <InputLog type="password" placeholder="Digite a sua senha"/>
      </div>
      <Button className="submit-form">Entrar</Button>
    </div>
  )
}

export default App
