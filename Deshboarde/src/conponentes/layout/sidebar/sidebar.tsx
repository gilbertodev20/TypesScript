import React from "react";

import { NavLink } from 'react-router-dom';

import styles from './sidebar.module.css'

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <nav className={styles.navigation}>

                <ul>
                    <li>
                        <NavLink to="/" >
                            <h3>Home</h3>
                        </NavLink>
                    </li>
                </ul>
                <h3>Curriculo</h3>
                <ul>
                    <li>
                        <NavLink to="/curriculo/cadastro/resumo" >
                            Cadastrar Resumo
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/curriculo/cadastro/experiencia-academica" >
                            Cadastrar Experiência Academica
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/curriculo/cadastro/experiencia-profissional" >
                            Cadastre Experiência profissinal
                        </NavLink>
                    </li>

                </ul>
                <h3>Portfolio</h3>
                <ul>
                    <li>
                        <NavLink to="/portfolio/cadastro" >
                            Cadastre Portfolio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio/listtagem" >
                            Listagem de Portfolio
                        </NavLink>

                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Sidebar