
import { createRoot } from 'react-dom/client'
import React from 'react'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.tsx'
import "./App.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  
);
