import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from '@/pages/Home'
import AllProjects from '@/pages/AllProjects'
import SystemPage from '@/pages/SystemPage'
import NotesPage from '@/pages/NotesPage'
import PlayPage from '@/pages/PlayPage'
import TastePage from '@/pages/TastePage'
import ExperiencePage from '@/pages/ExperiencePage'
import BlogPost from '@/pages/BlogPost'
import NotFound from '@/pages/NotFound'
import { ThemeProvider } from '@/context/ThemeContext'
import { MusicProvider } from '@/context/MusicContext'
import ThemeTransition from '@/components/common/ThemeTransition'
import ProjectDetails from '@/components/sections/projectDetails'
import { supportsViewTransitions } from '@/utils/viewTransitions'
// import { MinimalTransitionIndicator } from '@/components/common/TransitionIndicator'


function AnimatedRoutes() {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Add view transition class based on route
  useEffect(() => {
    if (supportsViewTransitions()) {
      const root = document.documentElement;

      // Add specific transition classes based on route
      if (location.pathname === '/') {
        root.classList.add('portfolio-hero');
      } else {
        root.classList.remove('portfolio-hero');
      }

      // Add loading state during transitions
      setIsTransitioning(true);
      const timer = setTimeout(() => setIsTransitioning(false), 300);

      return () => {
        clearTimeout(timer);
        root.classList.remove('portfolio-hero');
      };
    }
  }, [location.pathname]);

  return (
    <div className={isTransitioning ? 'view-transition-loading' : ''}>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/system' element={<SystemPage />} />
          <Route path='/notes' element={<NotesPage />} />
          <Route path='/notes/:slug' element={<BlogPost />} />
          <Route path='/play' element={<PlayPage />} />
          <Route path='/experience' element={<ExperiencePage />} />
          <Route path='/projects' element={<AllProjects />} />
          <Route path='/taste' element={<TastePage />} />
          <Route path='/project/:id' element={<ProjectDetails />} />
          <Route path='/blog/:id' element={<BlogPost />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <MusicProvider>
        <Router>
          <AnimatedRoutes />
          <ThemeTransition />
          {/* <MinimalTransitionIndicator /> */}
        </Router>
      </MusicProvider>
    </ThemeProvider>
  )
}

export default App
