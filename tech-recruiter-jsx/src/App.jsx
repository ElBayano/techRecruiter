import { useState } from 'react'

import "./assets/icons/emailIcon.svg"
import "./assets/icons/passwordIcon.svg"

import { BrowserRouter ,Routes, Route} from "react-router-dom"
import LoginPage from "./components/pages/login/LoginPage"
import Overview from "./components/pages/overview/Overview"
function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path='/' index element={<LoginPage/>}/>
        <Route path='/painel' element={<Overview/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App
