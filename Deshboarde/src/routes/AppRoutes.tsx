import React from "react";
import { Outlet, Route } from "react-router-dom";
import Layout from '../conponentes/layout/layout'

import Home from '../pages/home/Home' 
import CadastrarInformacoes from '../pages/curriculo/CadastrarImformacoes/CadastrarInformacoes'
import CadastrarExpariencia from '../pages/curriculo/CadastrarExperiencia'
import ListaPortfolio from '../pages/portfolio/ListaPortfolio'
import ListaExpariencia from '../pages/curriculo/ListaExperiencia/ListaExperiencia'
import CadastrarPortfolio from '../pages/portfolio/CadastrarPortfolio'

import UpdateExperiencia from '../pages/curriculo/UpdateExperiencia/UpdateExperiencia'

const AppRoutes: React.FC = () => {
    return (
        <Layout>
            <Outlet />
           
        </Layout>
    )
}

export default AppRoutes