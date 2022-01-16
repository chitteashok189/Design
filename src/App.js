import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Create from './components/Create'
import Figmasaml from './components/Figmasaml'
import Header from './components/Header'
import Login from './components/Login'
import Password from './components/Password'

export default function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
       <Route path="/" element={<Header/>}></Route>
       <Route path="/login" element={<Login/>}></Route>
       <Route path="/saml" element={<Figmasaml/>}></Route>
       <Route path="/password" element={<Password/>}></Route>
       <Route path="/create" element={<Create/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  )
}
