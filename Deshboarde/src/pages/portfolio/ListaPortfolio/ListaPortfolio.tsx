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
    const handleEdit = async (portfolio: Portfolio) => {

    }

}
const handeleteDelete = async (portfolio: Portfolio) => {
    try {
        await deletePortfolio(ex)
        fetchExperiencia();
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
                {portfolio.map((itemPortfolio, index) => (
                    <tr key={index}>
                        <td>{itemPortfolio.title}</td>
                        <td>< img src={itemPortfolio.Image} alt={itemPortfolio.title} className={styles.Image} /></td>
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