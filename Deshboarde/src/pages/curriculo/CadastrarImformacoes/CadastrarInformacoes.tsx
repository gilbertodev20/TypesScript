import styles from './CadastrarInformacoes.module.css'
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import Input from '../../../conponentes/forms/input/input';
import Textarea from '../../../conponentes/forms/textarea/textarea.tsx';
interface FormValues {
    foto: string;
    nome: string;
    cargo: string;
    resumo: string;
}
const CadastrarInformacoes: React.FC = () => {
    const initialValues: FormValues = {
        foto: '',
        nome: '',
        cargo: '',
        resumo: '',
    };
    const validationSchema = Yup.object().shape({
        foto: Yup.string().required('campo obrigatório'),
        nome: Yup.string().required('campo obrigatório'),
        cargo: Yup.string().required('campo obrigatório'),
        resumo: Yup.string().required('campo obrigatótório'),
    });

    const onSubmit = (values: FormValues, { resetForm }: { resetForm: () => void }) => {
        console.log({ values });
        resetForm();
        alert('Formulário enviado com sucesso!');
    }

    return (
        <div className={styles.formWrapper}>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({ touched, errors }) => (

                    <Form action="" className={styles.form}>

                        <h2 className={styles.title}>Informaçõe Pessoais</h2>

                        <Input
                            label="Nome"
                            name="nome"
                            errors={errors.nome}
                            touched={touched.nome}
                        />
                        <Input
                            label="Foto"
                            name="foto"
                            errors={errors.foto}
                            touched={touched.foto}
                        />
                        <Input
                            label="Cargo"
                            name="cargo"
                            errors={errors.cargo}
                            touched={touched.cargo}
                        />
                        <fieldset className={styles.formGroup}>
                            <label htmlFor="tipo" className={styles.label}>Tipo</label>
                            <select name="tipo" id="tipo" className={styles.input}>
                                <option value='0' >Selecione</option>
                                <option value='Profissional'>Profissional</option>
                                <option value='academico'>Academico</option>
                            </select>
                        </fieldset>

                        <Textarea
                            label="Resumo"
                            name="resumo"
                            errors={errors.resumo}
                            touched={touched.resumo}
                        />


                        <button type="submit" className={styles.button}>Salvar</button>
                    </Form>
                )}
            </Formik >
        </div>
    )
}
export default CadastrarInformacoes