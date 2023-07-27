import { useState } from 'react'
import './App.css'

import "./assets/icons/emailIcon.svg"
import "./assets/icons/passwordIcon.svg"

/* import InputLog from './components/inputs/inputLog'
import Button from "./components/buttons/buttonComponent" */
import {Routes, Route} from "react-router-dom"
import LoginPage from "./components/pages/login/LoginPage"
import Painel from "./components/pages/painel/Painel"

function App() {

  return (
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/painel' element={<Painel/>}/>
    </Routes>
  )
}

export default App
