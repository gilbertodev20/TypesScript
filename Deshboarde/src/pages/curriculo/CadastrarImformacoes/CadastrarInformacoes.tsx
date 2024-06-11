import styles from './CadastrarInformacoes.module.css'
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import Input from '../../../conponentes/forms/input/input';
import Textarea from '../../../conponentes/forms/textarea/textarea.tsx';
import Select from '../../../conponentes/forms/select/index.ts';
import { Informacoes, createInformacoes } from '../../../services/informacoesService.ts';

const CadastrarInformacoes: React.FC = () => {
    const initialValues: Informacoes = {
        id: 0,
        foto: '',
        nome: '',
        cargo: '',
        resumo: '',
        tipo: '',
    };
    const validationSchema = Yup.object().shape({
        foto: Yup.string().required('campo obrigatório'),
        nome: Yup.string().required('campo obrigatório'),
        cargo: Yup.string().required('campo obrigatório'),
        resumo: Yup.string().required('campo obrigatótório'),
    });

    const onSubmit = async (values: Informacoes, { resetForm }: { resetForm: () => void }) => {
        try{
            await createInformacoes (values)
            console.log({ values });
            resetForm();
            alert('Formulário enviado com sucesso!');
        }
        catch(error){
            console.error("Erro ao enviar o formulário:", error);
            alert("Erro ao enviar o formulário.Tente novamente. " );
        }
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