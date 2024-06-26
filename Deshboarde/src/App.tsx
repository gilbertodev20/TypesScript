import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './pages/login/Login'
import './App.css'
import  AuthRoutes  from './routes/AuthRoutes'
import { AuthProvider } from './contexts/AuthContext'


const App: React.FC = () => {


  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/*' element={<AuthRoutes />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  )
}

export default App
