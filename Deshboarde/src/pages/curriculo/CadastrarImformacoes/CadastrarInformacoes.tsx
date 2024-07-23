import React, { useEffect, useState } from 'react';
import styles from './CadastrarInformacoes.module.css'
import * as Yup from 'yup';
import { Informacoes, getInformacoes, createOrUpdateInformacoes, deleteInformacoes } from '../../../services/informacoesService.ts';


import Input from '../../../conponentes/forms/input/input';
import Textarea from '../../../conponentes/forms/textarea/textarea.tsx';
import InformacoesCard from './InformacoesCard/InformacoesCard.tsx';
import Button from '../../../conponentes/common/Button/Button.tsx';
import Title from '../../../conponentes/common/Title/Title.tsx';
import Form from '../../../conponentes/forms/Form';
const CadastrarInformacoes: React.FC = () => {

    const [informacoes, setInformacoes] = useState<Informacoes>({} as Informacoes);

    const initialValues: Informacoes = {
        id: 1,
        foto: '',
        nome: '',
        cargo: '',
        resumo: '',
    };
    const validationSchema = Yup.object().shape({
        id: Yup.number(),
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
            await createOrUpdateInformacoes(values);
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
            await deleteInformacoes();
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
            <Form
                initialValues={initialValues}
                enableReiniciar={true}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>

                {({ touched, errors }) => (

                    <>

                        <Title>Informações Pessoais</Title>

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
                        <Textarea
                            label="Resumo"
                            name="resumo"
                            errors={errors.resumo}
                            touched={touched.resumo}
                        />

                        <Button type='submit'>Salvar</Button>
                    </>
                )}
            </Form>
            {informacoes &&
                <div className={styles.cardContainer}>
                    <InformacoesCard informacoes={informacoes} />

                    <Button onClick={handleDelete} red >Deletar</Button>
                </div>
            }
        </div>
    )
}
export default CadastrarInformacoes