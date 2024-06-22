import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from '../conponentes/layout/layout'

import Home from '../pages/home/Home'
import CadastrarInformacoes from '../pages/curriculo/CadastrarImformacoes/CadastrarInformacoes'
import CadastrarExpariencia from '../pages/curriculo/CadastrarExperiencia'
import ListaPortfolio from '../pages/portfolio/ListaPortfolio'
import ListaExpariencia from '../pages/curriculo/ListaExperiencia/ListaExperiencia'
import CadastrarPortfolio from '../pages/portfolio/CadastrarPortfolio'


import { useAuth } from "../contexts/AuthContext";

const AppRoutes: React.FC = () => {
    const {authenticated, isLoading} = useAuth();
    if (isLoading) {
        return <p>Carregando...</p>
    }

    if(!authenticated){
        return <Navigate to="/login" />
    }


    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/curriculo/informacoes/cadastro' element={<CadastrarInformacoes />} />
                <Route path='/curriculo/experiencia/lista' element={<ListaExpariencia />} />
                <Route path='/curriculo/experiencia/cadastro' element={<CadastrarExpariencia />} />
                <Route path='/portfolio/lista' element={<ListaPortfolio />} />
                <Route path='/portfolio/cadastro' element={<CadastrarPortfolio />} />
            </Routes>
        </Layout>
    )
}

export default AppRoutes