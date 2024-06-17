import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import styles from "./ListaExperiencia.module.css"

import { Experiencia, getExperiencias, deleteExperiencia } from "../../../services/experienciaService";

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
    const handeleteDelete = async (id: number) => {
        try {
            await deleteExperiencia(id)
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
                            <button type="button" onClick={() => handeleteEdit(experiencia)}>Editar</button>
                            <button type="button" onClick={() => handeleteDelete(experiencia.id)}>Excluir</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default ListarExpariencia