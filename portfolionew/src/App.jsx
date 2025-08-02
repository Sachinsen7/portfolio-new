import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '@/pages/Home'
import AllProjects from '@/pages/AllProjects'
import BlogPost from '@/pages/BlogPost'
import NotFound from '@/pages/NotFound'
import { ThemeProvider } from '@/context/ThemeContext'
import ProjectDetails from '@/components/sections/projectDetails'

// Main app component with routing and theme provider

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={<AllProjects/>}/>
          <Route path='/project/:id' element={<ProjectDetails/>}/>
          <Route path='/blog/:id' element={<BlogPost/>}/>
          <Route path='/projects' element={<AllProjects/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App

