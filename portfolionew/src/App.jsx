import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from '@/pages/Home'
import AllProjects from '@/pages/AllProjects'
import BlogPost from '@/pages/BlogPost'
import NotFound from '@/pages/NotFound'
import { ThemeProvider } from '@/context/ThemeContext'
import ProjectDetails from '@/components/sections/projectDetails'

// Main app component with routing and theme provider

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<AllProjects/>}/>
        <Route path='/project/:id' element={<ProjectDetails/>}/>
        <Route path='/blog/:id' element={<BlogPost/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AnimatedRoutes />
      </Router>
    </ThemeProvider>
  )
}

export default App

