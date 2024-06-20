import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './pages/login/Login'
import './App.css'

const App: React.FC = () => {


  return (
    <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
     
        </Routes>
    </BrowserRouter>

  )
}

export default App
