import React from "react";

import styles from './CadastrarExperiencia.module.css'
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import Input from "../../../conponentes/forms/input";
import Textarea from "../../../conponentes/forms/textarea/textarea";
interface FormValues {
    titulo: string;
    descricao: string;
    tipo: string;
    anoInicio: string;
    anoFim: string;
}

const CadastrarExperiencia: React.FC = () => {
    const initialValues: FormValues = {
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

    const onSubmit = (values: FormValues, { resetForm }: { resetForm: () => void }) => {
        console.log({ values });
        resetForm();
        alert('Formulário enviado com sucesso!');
    }
    return (
        <div className={styles.formWrapper}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ touched, errors }) => (
                    <Form className={styles.form}>
                        <h2 className={styles.title}>Cadastrar de Experiência</h2>
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
                        <Textarea
                            label="Descricão"
                            name="descricao"
                            errors={errors.descricao}
                            touched={touched.descricao} />

                        <button type="submit" className={styles.button}>Cadastrar</button>
                    </Form>
                )}
            </Formik>
        </div>

    )
}
export default CadastrarExperiencia