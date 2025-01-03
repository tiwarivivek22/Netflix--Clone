import React from 'react'
import Home from "./pages/Home/Home";
import{Routes, Route} from 'react-router-dom'
import Login from './pages/Login/Login'

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>    
    </div>
  )
}

export default App
