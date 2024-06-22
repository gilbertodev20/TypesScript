

// import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import styles from "./Login.module.css";


import Input from "../../conponentes/forms/input/input";
import { login as loginService } from "../../services/authService";
import { useAuth } from "../../contexts/AuthContext";

import Form from "../../conponentes/forms/Form"
import Button from "../../conponentes/common/Button";
import Title from "../../conponentes/common/Title/Title";

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
    const { login } = useAuth();
    const onSubmit = async (values: LoginValues) => {
        try {
            const usuario = await loginService(values.email, values.password)
            login(usuario)
            navigate("/")
            console.log(values)
        } catch (error) {
            console.log(error)
            alert("Email ou senha inválidos")
        }
    }

    return (
        <div className={styles.loginWrapper}>
            <div >
                <Form

                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}>

                    {({ errors, touched }) => (
                        <>

                            <Title>MEU SITE PESSOAL</Title>
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
                            <Button type="submit">Login</Button>
                        </>
                    )}
                </Form>

            </div>
        </div>
    )

}
export default Login