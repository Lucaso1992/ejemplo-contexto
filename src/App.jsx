import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import useAppContext from './store/AppContext'
import './App.css'

function App() {
  const {store, actions} = useAppContext();


  return (
    <>
      <h1>HOLA</h1>
      <button onClick={() => actions.setCondition(prev => !prev)}>button</button>

    </>
  )
}

export default App
