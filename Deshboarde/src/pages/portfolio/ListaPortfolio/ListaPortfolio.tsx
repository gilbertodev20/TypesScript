import React, { useState } from "react";

import { useNavigate } from "react-router-dom";


import { deletePortfolio, getPortfolio, Portfolio } from "../../../services/portfolioService";
import Table from "../../../conponentes/common/Table";
import { Column } from "../../../conponentes/common/Table/Taable";




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
            alert("ocorreu um erro ao buscar o Portfolio. Tente novamente. ");
        }
    }
    React.useEffect(() => {
        fetchPortfolio();
    }, []);
    const handleEdit = (intemPortfolio: Portfolio) => {
        navigate("/portfolio/cadastro", { state: intemPortfolio });

    }


    const handleteDelete = async (portfolio: Portfolio) => {
        try {
            await deletePortfolio(portfolio.id)
            fetchPortfolio();
            alert('Experiência excluída com sucesso!');
        }
        catch (error) {
            console.log('Erro ao excluir:', error);
            alert("ocorreu um erro ao excluir a experiência. Tente novamente. ");
        }
    };
    const columns: Column<Portfolio>[] = [
        { header: 'Título', accessor: 'title' },
        { header: 'Imagem', accessor: 'image' },
        { header: 'Link', accessor: 'link' }
    ];

    return (
        <Table
         columns={columns}
         data={portfolio}
         handleEdit={handleEdit}
         handleDelete={handleteDelete}
         
        />

       
    )
}


export default ListaPortfolio