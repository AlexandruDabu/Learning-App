import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import { Route, Routes } from 'react-router'
import Layout from './components/Layout'
import Quizzes from './pages/Quizzes/Quizzes'
import Profile from './pages/Profile/Profile'
import Lessons from './pages/Lessons/Lessons'
import Contact from './pages/Contact/Contact'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/lessons' element={<Lessons/>}/>
        <Route path='/quizzes' element={<Quizzes/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Route>
    </Routes>
  )
}

export default App
