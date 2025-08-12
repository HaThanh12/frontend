import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import DynamicItems from './footer/dynamicItems.tsx'
import Logos from './footer/logos.tsx'
import Footer from './footer/footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='main-container'>
      <App />
      <DynamicItems/>
      <Logos/>
      <Footer/>
    </div>
  </StrictMode>,
)
