import { useState } from 'react'
import './App.css'

import "./assets/icons/emailIcon.svg"
import "./assets/icons/passwordIcon.svg"

import { BrowserRouter ,Routes, Route} from "react-router-dom"
import LoginPage from "./components/pages/login/LoginPage"
import Painel from "./components/pages/painel/Painel"
import FooterSession from "./components/footerSession/footerSession"
function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/' element={<FooterSession/>}/>
        <Route path='/painel' element={<Painel/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App
