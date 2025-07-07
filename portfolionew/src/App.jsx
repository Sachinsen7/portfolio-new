import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '@/pages/Home'
import BlogPost from '@/pages/BlogPost'
import NotFound from '@/pages/NotFound'
import { ThemeProvider } from '@/context/ThemeContext'

// Main app component with routing and theme provider

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/blog/:id' element={<BlogPost/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
