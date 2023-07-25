import { useState } from 'react'
import './App.css'

import InputLog from './components/inputs/inputLog'
import Button from "./components/buttons/buttons"
function App() {

  return (
    <div className='app'>
     <InputLog type="text" placeholder="Email"/>
     <InputLog type="password" placeholder="Digite a sua senha"/>
     <Button className="submit-form">Teste do botão</Button>
    </div>
  )
}

export default App
