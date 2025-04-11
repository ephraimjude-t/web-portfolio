import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './home.tsx'
import Navbar from './Components/navbar.tsx'
import StarsBackground from './Components/StarBackground.tsx'
import './gradientanimation.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <Home />
   <Navbar />
   <StarsBackground />
  </StrictMode>,
);
