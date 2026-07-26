import { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from '@/pages/Home'
import { ThemeProvider } from '@/context/ThemeContext'
import { MusicProvider } from '@/context/MusicContext'
import ThemeTransition from '@/components/common/ThemeTransition'
import RouteLoader from '@/components/common/RouteLoader'
import VerticalScrollIndicator from '@/components/common/VerticalScrollIndicator'
import { supportsViewTransitions } from '@/utils/viewTransitions'

const AllProjects = lazy(() => import('@/pages/AllProjects'))
const SystemPage = lazy(() => import('@/pages/SystemPage'))
const NotesPage = lazy(() => import('@/pages/NotesPage'))
const PlayPage = lazy(() => import('@/pages/PlayPage'))
const TastePage = lazy(() => import('@/pages/TastePage'))
const ExperiencePage = lazy(() => import('@/pages/ExperiencePage'))
const BlogPost = lazy(() => import('@/pages/BlogPost'))
const NotFound = lazy(() => import('@/pages/NotFound'))
const ProjectDetails = lazy(() => import('@/components/sections/projectDetails'))


function AnimatedRoutes() {
  const location = useLocation();

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

      return () => {
        root.classList.remove('portfolio-hero');
      };
    }
  }, [location.pathname]);

  return (
    <div>
      <RouteLoader />
      <AnimatePresence mode="wait" initial={false}>
        <Suspense fallback={null}>
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
        </Suspense>
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
          <VerticalScrollIndicator />
        </Router>
      </MusicProvider>
    </ThemeProvider>
  )
}

export default App
