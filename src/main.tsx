import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'

import Hero from './Hero.tsx'
import NavBar from './components/navBar.tsx'
import ImageCarousel from './ImageCarousel.tsx'
import Ingredients from './Ingredients.tsx'
import About from './About.tsx'
import FAQ from './FAQ.tsx'
import Footer from './Footer.tsx'
import Line from './components/line.tsx'
import Benefit from './Benefit.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavBar />
    <Hero />
    <About />
    <Ingredients />
    <Benefit />
    <FAQ />
    
    <ImageCarousel />
    <Footer />
    
    
  </StrictMode>,
)
