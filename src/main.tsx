import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './home.tsx'
import Navbar from './Components/navbar.tsx'
import Skills from './Pages/Skills.tsx'
import './gradientanimation.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <Home />
   <Navbar />
   <Skills />
  </StrictMode>,
);
