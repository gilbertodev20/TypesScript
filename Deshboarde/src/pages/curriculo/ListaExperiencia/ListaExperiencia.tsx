import React, { useState } from "react";

import styles from "./ListaExperiencia.module.css"

interface Experiencia {
    titulo: string;
    descricao: string;
    tipo: string;
    anoInicio: string;
    anoFim: string;
}
const ListarExpariencia: React.FC = () => {
    const [experiencia, setExperiencia] = useState<Experiencia[]>([
        {
            titulo: 'Estagio em Desenvolvimento de software',
            descricao: 'Desenvolvimento de aplicações web utilizando React e Node.js',
            tipo: 'profissional',
            anoInicio: '2022',
            anoFim: '2022'
        },
    ])
    const handleDelete = (index: number) => {

    };
    const handleEdit = (experiencia: Experiencia) => {

    };


    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Descricão</th>
                    <th>Tipo</th>
                    <th>Ano de Início</th>
                    <th>Ano de Fim</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {experiencia.map((experiencia, index) => (
                    <tr key={index}>
                        <td>{experiencia.titulo}</td>
                        <td>{experiencia.descricao}</td>
                        <td>{experiencia.tipo}</td>
                        <td>{experiencia.anoInicio}</td>
                        <td>{experiencia.anoFim}</td>
                        <td>
                            <button onClick={() => handleEdit(experiencia)}>Editar</button>
                            <button onClick={() => handleDelete(index)}>Excluir</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default ListarExpariencia