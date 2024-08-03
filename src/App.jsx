import './App.css'
import HomePage from './pages/HomePage/HomePage'
import { Route, Routes } from 'react-router'
import Layout from './components/Layout'
import Quizzes from './pages/Quizzes/Quizzes'
import Profile from './pages/Profile/Profile'
import Lessons from './pages/Lessons/Lessons'
import Contact from './pages/Contact/Contact'
import FlashCards from './features/FlashCards/FlashCards'
import Courses from './features/Courses/Courses'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/lessons' element={<Lessons/>}>
          <Route path='flashcards' element={<FlashCards/>}/>
          <Route path='courses' element={<Courses/>}/>
          <Route path='questions'/>
        </Route>
        <Route path='/quizzes' element={<Quizzes/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Route>
    </Routes>
  )
}

export default App
