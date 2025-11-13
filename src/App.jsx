import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Juego } from './Components/Juego'
import { Principal } from "./Components/Principal";

const Creditos = () => {
  return (
    <div>
      Creditos
    </div>
  )
}

const Historia = () => {
  return (
    <div>
      Juego
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Inicio</div>} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/creditos" element={<Creditos />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/juego" element={<Juego />} />
      </Routes>
    </Router>
  )
}

export default App
