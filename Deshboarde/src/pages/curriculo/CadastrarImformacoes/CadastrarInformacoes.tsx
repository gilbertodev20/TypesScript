import styles from './CadastrarInformacoes.module.css'
import * as Yup from 'yup';
import { Formik } from 'formik';
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

const onSubmit = (values: FormValues,{resetForm}: {resetForm: () => void}) => {
    console.log(values);
    resetForm();
    alert('Formulário enviado com sucesso!')
}
    return (
        <div className={styles.formWrapper}>
            <Formik initialValuesms={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                <form action="" className={styles.form}>

                    <h2 className={styles.title}>Informaçõe Pessoais</h2>

                    <fieldset className={styles.formGroup}>
                        <label htmlFor="nome" className={styles.label}>Nome</label>
                        <input type="text" name="nome" id="nome" className={styles.input}></input>
                    </fieldset>

                    <fieldset className={styles.formGroup}>
                        <label htmlFor="foto" className={styles.label}>Foto</label>
                        <input type="text" name="foto" className={styles.input}></input>
                    </fieldset>
                    <fieldset className={styles.formGroup}>
                        <label htmlFor="cargo" className={styles.label}>Cargo</label>
                        <input type="text" name="cargo" id="cargo" className={styles.input}></input>
                    </fieldset>
                    <fieldset className={styles.formGroup}>
                        <label htmlFor="resumo" className={styles.label}>Resumo</label>
                        <textarea name="resumo" id="resumo" className={styles.textarea}></textarea>
                    </fieldset>
                </form>
            </Formik >
        </div>
    )
}
export default CadastrarInformacoes