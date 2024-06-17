import React from "react";

import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { useLocation, useNavigate } from 'react-router-dom';

import Input from "../../../conponentes/forms/input/index.tsx";
import Textarea from "../../../conponentes/forms/textarea/textarea.tsx";
import styles from './UpdateExperiencia.module.css'
import Select from '../../../conponentes/forms/select/index.ts';

import { Experiencia, updateExperiencia } from '../../../services/experienciaService.ts';


const UpdateExperiencia: React.FC = () => {
    const navigate = useNavigate();
    const lacation = useLocation();
    const experiencia = lacation.state as Experiencia;

    const initialValues: Experiencia = {
        id: '',
        titulo: '',
        descricao: '',
        tipo: '',
        anoInicio: '',
        anoFim: '',
    }
    const validationSchema = Yup.object().shape({
        titulo: Yup.string().required('campo obrigatório'),
        descricao: Yup.string().required('campo obrigatório'),
        tipo: Yup.string().required('campo obrigatório'),
        anoInicio: Yup.number().required('campo obrigatório').typeError("Um número é obrigatório"),
        anoFim: Yup.number().required('campo obrigatório').typeError("Um número é obrigatório"),
    })

    const onSubmit = async (values: Experiencia, { resetForm }: { resetForm: () => void }) => {
        try {
            console.log({ values });
            await updateExperiencia(values);
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
        <div className={styles.formWrapper}>
            <Formik
                initialValues={experiencia || initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ touched, errors }) => (
                    <Form className={styles.form}>
                        <h2 className={styles.title}>Atualizar Experiência: {experiencia.id}</h2>
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
                            touched={touched.descricao} />

                        <button type="submit" className={styles.button}>Salvar</button>
                    </Form>
                )}
            </Formik>
        </div>

    )
}
export default UpdateExperiencia