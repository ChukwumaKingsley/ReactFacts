import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.tsx'
import Body from './components/Body.tsx'

function App() {
  return (
    <div className='page'>
      <Navbar />
      <Body />
    </div>
  )
}

export default App
