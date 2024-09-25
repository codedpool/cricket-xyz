import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tournament from "./pages/Tournament"
import Blog from './pages/Blog'
import { BrowserRouter as Router } from 'react-router-dom';
 import { Routes ,Route } from 'react-router-dom'
import Fullblog from './pages/Fullblog'
import Spin from './pages/Spin'
import Home from './pages/Home'
import News from './pages/News'
import Login from './pages/Login'
import RegisterationForm from './pages/Signup'

function App() {
 
  return (
    <>
 <Router>
  <Routes>
 
  <Route path="/" element={<Home/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/signup" element={<RegisterationForm/>}/>
  <Route path="/tournament" element={<Tournament/>}/>
  <Route path="/blogs" element={<Blog/>}/>
  <Route path="/blogs/blog" element={<Fullblog/>}/>
  <Route path="/quiz" element={<Spin/>}/>
  <Route path="/news" element={<News/>}/>
 </Routes>
 </Router>
    </>
  )
}

export default App
