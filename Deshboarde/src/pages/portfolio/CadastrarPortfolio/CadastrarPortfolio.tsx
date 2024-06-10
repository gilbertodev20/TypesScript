import React from "react";

import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import styles from './CadastrarPortfolio.module.css'
import Input from "../../../conponentes/forms/input";

interface FormValues {
    link: string;
    image: string;
    title: string;
}
const initialValues: FormValues = {
    link: "",
    image: "",
    title: "",
}
const validationSchema = Yup.object().shape({
    link: Yup.string().required("campo obrigatório"),
    image: Yup.string().required("campo obrigatório"),
    title: Yup.string().required("campo obrigatório")
})
const CadastrarPortfolio: React.FC = () => {
    const onSubmit = (values: FormValues, { resetForm }: { resetForm: () => void }) => {
        console.log({ values })
        resetForm()
        alert("Formulário enviado com sucesso!")
    }
    return (
        <div className={styles.formWrapper}>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({ touched, errors }) => (
                <Form className={styles.form}>
                    <h2 className={styles.title}>Cadastrar de Portfolio</h2>
                    <Input
                        label="Link"
                        name="link"
                        errors={errors.link}
                        touched={touched.link}/>
                    <Input
                        label="image"
                        name="image"
                        errors={errors.image}
                        touched={touched.image}/>
                    <Input
                        label="Título"
                        name="title"
                        errors={errors.title}
                        touched={touched.title}/>
                    <button type="submit" className={styles.button}>Enviar</button>
                </Form>
                )}

            </Formik>
        </div>
    )
}
export default CadastrarPortfolio