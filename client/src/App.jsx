import { useState } from 'react'
import Home from './pages/Home'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/login" element = {<Login />}/>
        <Route path="/signup" element = {<Signup />}/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
