import React from "react";

import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { useLocation, useNavigate } from 'react-router-dom';

import styles from './CadastrarPortfolio.module.css'
import Input from "../../../conponentes/forms/input";

import { Portfolio, createPortfolio } from '../../../services/portfolioService';



const CadastrarPortfolio: React.FC = () => {
    const navigate = useNavigate();
    const lacation = useLocation();
    const portfolio = lacation.state as Portfolio;

    const initialValues: Portfolio = {
        id: 0,
        link: "",
        image: "",
        title: "",
    }
    const validationSchema = Yup.object().shape({
        link: Yup.string().required("campo obrigatório"),
        image: Yup.string().required("campo obrigatório"),
        title: Yup.string().required("campo obrigatório")
    })
    const onSubmit = async (values: Portfolio, { resetForm }: { resetForm: () => void }) => {
        try {
            await createPortfolio(values);
            resetForm();
            alert('Formulário enviado com sucesso!');
            navigate("/portfolio/lista");
        } catch (error) {
            console.error(error);
            alert("Erro ao enviar o formulário.Tente novamente. ");
        }


        // console.log({ values })
        // resetForm()
        // alert("Formulário enviado com sucesso!")
    }
    return (
        <div className={styles.formWrapper}>
            <Formik
                initialValues={portfolio || initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
                {({ touched, errors }) => (
                    <Form className={styles.form}>
                        <h2 className={styles.title}>Cadastrar de Portfolio</h2>
                        <Input
                            label="Link"
                            name="link"
                            errors={errors.link}
                            touched={touched.link} />
                        <Input
                            label="image"
                            name="image"
                            errors={errors.image}
                            touched={touched.image} />
                        <Input
                            label="Título"
                            name="title"
                            errors={errors.title}
                            touched={touched.title} />
                        <button type="submit" className={styles.button}>Enviar</button>
                    </Form>
                )}

            </Formik>
        </div>
    )
}
export default CadastrarPortfolio