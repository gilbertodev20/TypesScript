import React from "react";

import * as Yup from 'yup';

import { useLocation, useNavigate } from 'react-router-dom';

import styles from './CadastrarPortfolio.module.css'
import Input from "../../../conponentes/forms/input";

import { Portfolio, createOrUpdatePortfolio } from '../../../services/portfolioService';
import Button from "../../../conponentes/common/Button";
import Title from "../../../conponentes/common/Title/Title";
import Form from "../../../conponentes/forms/Form";


const CadastrarPortfolio: React.FC = () => {
    const navigate = useNavigate();
    const lacation = useLocation();
    const portfolio = lacation.state as Portfolio;

    const initialValues: Portfolio = {
        id: "0",
        link: "",
        image: "",
        title: "",
    }
    const validationSchema = Yup.object().shape({
        id: Yup.string(),
        link: Yup.string()
        .required("campo obrigatório"),
        image: Yup.string()
        .required("campo obrigatório"),
        title: Yup.string()
        .required("campo obrigatório")
    })
    const onSubmit = async (values: Portfolio, { resetForm }: { resetForm: () => void }) => {
        try {
            await createOrUpdatePortfolio(values);
            resetForm();
            alert('Formulário enviado com sucesso!');
            navigate("/portfolio/lista");
        } catch (error) {
            console.error(error);
            alert("Erro ao enviar o formulário.Tente novamente. ");
        }
    }
    return (
        <div className={styles.formWrapper}>
            <Form
                initialValues={portfolio || initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
                {({ touched, errors }) => (
                    <>
                        <Title>Cadastrar de Portfolio</Title>

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
                        <Button type="submit">Enviar</Button>
                    </>
                )}

            </Form>
        </div>
    )
}
export default CadastrarPortfolio