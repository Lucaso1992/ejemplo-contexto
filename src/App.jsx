import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import useAppContext from './store/AppContext'
import './App.css'
import Navbar from './components/Navbarr/Navbar.jsx'


function App() {
  const {store, actions} = useAppContext();


  return (
    <>
  <Navbar/>

    </>
  )
}

export default App
