import React, { useEffect, useState } from 'react';
import styles from './CadastrarInformacoes.module.css'
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import Input from '../../../conponentes/forms/input/input';
import Textarea from '../../../conponentes/forms/textarea/textarea.tsx';
import Select from '../../../conponentes/forms/select/index.ts';
import { Informacoes, updateInformacoes, getInformacoes } from '../../../services/informacoesService.ts';
import InformacoesCard from './InformacoesCard/InformacoesCard.tsx';

const CadastrarInformacoes: React.FC = () => {

    const [informacoes, setInformacoes] = useState<Informacoes>({} as Informacoes);

    const initialValues: Informacoes = {
        id: 1,
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
    const fetchInformacoes = async () => {
        try {
            const informacoes = await getInformacoes();
            setInformacoes(informacoes);
        }
        catch (error) {
            console.error("Erro ao buscar informações:", error);
        }
    }
    useEffect(() => {
        fetchInformacoes();
    }, []);

    const onSubmit = async (values: Informacoes, { resetForm }: { resetForm: () => void }) => {
        try {
            await updateInformacoes(values);
            setInformacoes(values);
            console.log({ values });
            resetForm();
            alert('Formulário enviado com sucesso!');
        }
        catch (error) {
            console.error("Erro ao enviar o formulário:", error);
            alert("Erro ao enviar o formulário.Tente novamente. ");
        }
    }
     const handleDelete = async () => {
        try {
            await updateInformacoes(initialValues);
            setInformacoes(initialValues);
            alert('Formulário excluído com sucesso!');
     }
        catch (error) {
            console.error("Erro ao excluir o formulário:", error);
            alert("Erro ao excluir o formulário. Tente novamente. ");
        }
    }
    return (
        <div className={styles.formWrapper}>
            <Formik
                initialValues={informacoes}
                enableReiniciar={true}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
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
            </Formik>
            {informacoes &&
            object.entries(informacoes).some(
                ([key, value]) => key !== "id" &&
            

            <div className={styles.cardContainer}>
                <InformacoesCard informacoes={informacoes} />
                <button type="button"
                     onClick={handleDelete}
                    className={`${styles.button} ${styles.deleteButton}`}>
                    Delete
                </button>
            </div>
        </div>
    )
}
export default CadastrarInformacoes