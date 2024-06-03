import React from "react";

import styles from './CadastrarInformacoes.module.css'
const CadastrarInformacoes = () => {
    return (
        <div className={styles.formWrapper}>
            <h1>Cadastar informações</h1>
            <form action="" className={styles.form}>
                <h2 className={styles.title}>Informaçõe Pessoais</h2>
                <fieldset className={styles.formGroup}>
                    <label htmlFor="nome" className={styles.label}>Nome</label>
                    <input type="text" name="nome" id="nome" className={styles.input}></input>
                </fieldset>
            </form>
        </div>
    )
}
export default CadastrarInformacoes