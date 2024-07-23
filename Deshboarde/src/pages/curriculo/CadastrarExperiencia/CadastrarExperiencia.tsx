import React from "react";

import * as Yup from 'yup';
import { useLocation, useNavigate } from 'react-router-dom';

import Input from "../../../conponentes/forms/input/index.tsx";
import Textarea from "../../../conponentes/forms/textarea/textarea.tsx";
import Select from '../../../conponentes/forms/select/index.ts';

import { Experiencia, createOrUpdateExperiencia } from '../../../services/experienciaService.ts';

import Form from "../../../conponentes/forms/Form";
import Button from "../../../conponentes/common/Button/";
import Title from "../../../conponentes/common/Title/Title.tsx";
const CadastrarExperiencia: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const experiencia = location.state as Experiencia

    const initialValues: Experiencia = {
        id: '0',
        titulo: '',
        descricao: '',
        tipo: '',
        anoInicio: '',
        anoFim: '',
    }
    const validationSchema = Yup.object().shape({
        id: Yup.string(),
        titulo: Yup.string().required('campo obrigatório'),
        descricao: Yup.string().required('campo obrigatório'),
        tipo: Yup.string().required('campo obrigatório'),
        anoInicio: Yup.number().required('campo obrigatório').typeError("Um número é obrigatório"),
        anoFim: Yup.number().required('campo obrigatório').typeError("Um número é obrigatório"),
    })

    const onSubmit = async (values: Experiencia, { resetForm }: { resetForm: () => void }) => {
        try {
            await createOrUpdateExperiencia(values);
            resetForm();
            alert('Formulário enviado com sucesso!');
            navigate("/curriculo/experiencia/lista");
        }
        catch (error) {
            console.error(error);
            alert("Erro ao enviar o formulário.Tente novamente. ");
        }

    }
    return (

        <Form
            initialValues={experiencia || initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ touched, errors }) => (
                <>
                    {
                        !experiencia ?

                            <Title>Cadastrar de Experiência</Title>
                            :
                            <Title>Atualizar de Experiência</Title>
                    }

                    <Input
                        label="Titulo"
                        name="titulo"
                        errors={errors.titulo}
                        touched={touched.titulo} />
                    <Input
                        label="Ano de Início"
                        name="anoInicio"
                        errors={errors.anoInicio}
                        touched={touched.anoInicio} />
                    <Input
                        label="Ano de Fim"
                        name="anoFim"
                        errors={errors.anoFim}
                        touched={touched.anoFim} />
                    <Select
                        label="Tipo de Experiência"
                        name="tipo"
                        options={[
                            { value: 'profissional', label: 'Profissional' },
                            { value: 'academico', label: 'Academico' },
                        ]}
                        errors={errors.tipo}
                        touched={touched.tipo}
                    />
                    <Textarea
                        label="Descricão"
                        name="descricao"
                        errors={errors.descricao}
                        touched={touched.descricao}
                    />

                    <Button type='submit'>Salvar</Button>
                </>
            )}
        </Form>


    )
}
export default CadastrarExperiencia