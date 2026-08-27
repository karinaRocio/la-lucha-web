import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Menu } from './pages/Menu';



function App() {
  return (
    <div className="app-container">
      {/* Aquí irá tu Navbar más adelante */}
      <main>
        <Menu />
      </main>
      {/* Aquí irá tu Footer más adelante */}
    </div>
  );
}

export default App
