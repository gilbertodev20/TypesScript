
import React from "react";

import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import styles from "./Login.module.css";


import Input from "../../conponentes/forms/input/input";
import { login } from "../../services/authService";

interface LoginValues {
    email: string;
    password: string;
}
const initialValues: LoginValues = {
    email: "",
    password: "",
}
const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email("Email inválido")
        .required("Email obrigatório"),
    password: Yup.string()
        .min(6, "Senha muito curta")
        .required("Senha obrigatória")

})
const Login = () => {
         const navigate = useNavigate();
    const onSubmit = async (values: LoginValues) => {
        try {
            await login(values.email, values.password)
            navigate("/")
            console.log(values)
        } catch (error) {
            console.log(error)
            alert("Email ou senha inválidos")
        }
    }
   
        return (
            <div className={styles.loginWrapper}>
                <div className={styles.formWrapper}>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}>
                        {({ errors, touched }) => (
                            <Form className={styles.form}>
                                <h1 className={styles.title}>MEU SITE PESSOAL</h1>
                                <Input
                                    label="Email"
                                    name="email"
                                    type="email"
                                    errors={errors.email}
                                    touched={touched.email}
                                />
                                <Input
                                    label="Password"
                                    name="password"
                                    type="password"
                                    errors={errors.password}
                                    touched={touched.password}
                                />
                                <button type="submit" className={styles.button}>Login</button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        )
    
}
export default Login