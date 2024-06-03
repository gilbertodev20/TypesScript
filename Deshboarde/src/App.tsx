import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import Layout from './conponentes/layout/layout'
import Home from './pages/home/Home' 
import CadastrarInformacoes from './pages/curriculo/CadastrarImformacoes/CadastrarInformacoes'

const App: React.FC = () => {


  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/curriculo/informacoes/cadastro' element={<CadastrarInformacoes />} />
        </Routes>
      </Layout>
    </BrowserRouter>

  )
}

export default App
