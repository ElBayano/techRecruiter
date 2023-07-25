import { useState } from 'react'
import './App.css'

import InputLog from './components/inputs/inputLog'

function App() {

  return (
    <div className='app'>
     <InputLog type="text" placeholder="Email"/>
     <InputLog type="password" placeholder="Digite a sua senha"/>
    </div>
  )
}

export default App
