import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import styles from './ListaPortfolio.module.css'
import { deletePortfolio, getPortfolio, Portfolio } from "../../../services/portfolioService";




const ListaPortfolio: React.FC = () => {
    const navigate = useNavigate();

    const [portfolio, setPortfolio] = useState<Portfolio[]>([])
    const fetchPortfolio = async () => {
        try {
            const portfolio = await getPortfolio();
            setPortfolio(portfolio);
        }
        catch (error) {
            console.log('Erro ao buscar Portfolio:', error);
        }
    }
    React.useEffect(() => {
        fetchPortfolio();
    }, []);
    const handleEdit = (portfolio: Portfolio) => {
        navigate("/portfolio/cadastro", { state: portfolio });

    }


const handleteDelete = async (portfolio: Portfolio) => {
    try {
        await deletePortfolio(portfolio)
    fetchPortfolio();
alert('Experiência excluída com sucesso!');
}
catch (error) {
    console.log('Erro ao excluir:', error);
alert("ocorreu um erro ao excluir a experiência. Tente novamente. ");
}
};

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
                {portfolio.map((portfolio, index) => (
                    <tr key={index}>
                        <td>{portfolio.title}</td>
                        <td>< img src={portfolio.image} alt={portfolio.title} className={styles.Image} /></td>
                        <td><a href={portfolio.link} target="_blank" rel="noreferrer">{portfolio.link}</a></td>
                        <td>
                            <button onClick={() => handleEdit(portfolio)}>Editar</button>
                            <button onClick={() => handleteDelete(portfolio)}>Excluir</button>
                        </td>
                    </tr>

                ))}
            </tbody>
        </table>
    )
}


export default ListaPortfolio