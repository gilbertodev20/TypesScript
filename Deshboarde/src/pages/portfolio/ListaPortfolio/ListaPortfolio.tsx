import React, { useState } from "react";

import styles from './ListaPortfolio.module.css'

interface Portfolio {
    link: string;   
    Image: string;
    title: string;
}

const ListaPortfolio: React.FC = () => {
     
         const [portfolio, setPortfolio] = useState<Portfolio[]>([
            {
                link: 'https://academy.comeialabs.com.br/',
                Image:'https://picsum.photos/300/200?random=1',
                title: 'Portfolio 1'
            },
            {
                link: 'https://academy.comeialabs.com.br/',
                Image:'https://picsum.photos/300/200?random=1',
                title: 'Portfolio 2'
            },
            {
                link: 'https://academy.comeialabs.com.br/',
                Image:'https://picsum.photos/300/200?random=1',
                title: 'Portfolio 3'
            }
         ])
         const handleEdit = (index: number) => {
    
         }
             const handleDelete = (index: number) => {
                //  setPortfolio(portfolio.filter((, i) => i !== index))
             }
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Imagem</th>
                    <th>Link</th>
                    <th>Ações</th> 
                </tr>
            </thead>
            <tbody>
                {portfolio.map((itemPortfolio, index) => (
                    <tr key={index}>
                        <td>{itemPortfolio.title}</td>
                        <td>< img src={itemPortfolio.Image} alt={itemPortfolio.title} className={styles.Image}/></td>
                        <td><a href={itemPortfolio.link} target="_blank" rel="noreferrer">{itemPortfolio.link}</a></td>
                         <td>
                            <button onClick={() => handleEdit(index)}>Editar</button>
                            <button onClick={() => handleDelete(index)}>Excluir</button>
                        </td> 
                    </tr>

                ))}
            </tbody>
        </table>
            )
}

export default ListaPortfolio