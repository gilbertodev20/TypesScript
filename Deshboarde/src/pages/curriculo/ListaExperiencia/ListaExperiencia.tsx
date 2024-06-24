import React, { useState } from "react";

import { useNavigate } from "react-router-dom";



import { Experiencia, getExperiencias, deleteExperiencia } from "../../../services/experienciaService";
import Table, { Column } from "../../../conponentes/common/Table/Taable";

const ListarExpariencia: React.FC = () => {
    const navigate = useNavigate();



    const [experiencia, setExperiencia] = useState<Experiencia[]>([])

    const fetchExperiencia = async () => {
        try {
            const experiencia = await getExperiencias();
            setExperiencia(experiencia);


        }
        catch (error) {
            console.log('Erro ao buscar experiencias:', error);


        }
    }
    React.useEffect(() => {
        fetchExperiencia();
    }, []);
    const handeleteEdit = (experiencia: Experiencia) => {
        navigate("/curriculo/experiencia/cadastro", { state: experiencia });
    };


    const handeleteDelete = async (experiencia: Experiencia) => {
        try {
            await deleteExperiencia(experiencia.id)
            fetchExperiencia();
            alert('Experiência excluída com sucesso!');
        }
        catch (error) {
            console.log('Erro ao excluir:', error);
            alert("ocorreu um erro ao excluir a experiência. Tente novamente. ");
        }
    };

     const columns: Column<Experiencia>[] = [
        { header: 'Título', accessor: 'titulo' },
        { header: 'Descricão', accessor: 'descricao' },
        { header: 'Tipo', accessor: 'tipo' },
        { header: 'Ano de Início', accessor: 'anoInicio' },
        { header: 'Ano de Fim', accessor: 'anoFim' },
    ];

    
    return (
       <Table
        columns={columns}
        data={experiencia}
        handleEdit={handeleteEdit}
        handleDelete={handeleteDelete}
        />
    )
}
export default ListarExpariencia