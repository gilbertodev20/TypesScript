import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './pages/login/Login'
import './App.css'
import { AppRoutes } from './routes'

import Home from './pages/home/Home' 
import CadastrarInformacoes from './pages/curriculo/CadastrarImformacoes/CadastrarInformacoes'
import CadastrarExpariencia from './pages/curriculo/CadastrarExperiencia'
import ListaPortfolio from './pages/portfolio/ListaPortfolio'
import ListaExpariencia from './pages/curriculo/ListaExperiencia/ListaExperiencia'
import CadastrarPortfolio from './pages/portfolio/CadastrarPortfolio'

import UpdateExperiencia from './pages/curriculo/UpdateExperiencia/UpdateExperiencia'

const App: React.FC = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/*' element={<AppRoutes>
          <Route path='/' element={<Home />} />
          <Route path='/curriculo/informacoes/cadastro' element={<CadastrarInformacoes />} />
          <Route path='/curriculo/experiencia/lista' element={<ListaExpariencia />} />
          <Route path='/curriculo/experiencia/cadastro' element={<CadastrarExpariencia />} />
          <Route path='/curriculo/experiencia/update' element={<UpdateExperiencia />} />
          <Route path='/portfolio/lista' element={<ListaPortfolio />} />
          <Route path='/portfolio/cadastro' element={<CadastrarPortfolio />} />
        </AppRoutes>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
