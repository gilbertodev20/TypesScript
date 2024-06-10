import React from "react";

import styles from './textarea.module.css'

import { Field, ErrorMessage } from 'formik';

interface TextareaProps {
    label: string;
    name: string;
    errors?: string;
    touched?: boolean;
}

//modularização do textarea
const Textarea: React.FC<TextareaProps> = ({ label, name, errors, touched }) => {
    return (
        <fieldset className={styles.formGroup}>
            {label && (
                <label htmlFor={name} className={styles.label}>
                    {label}:
                </label>
            )}

            <Field
                as="textarea"
                name={name}
                id={name}
                className={`${styles.textarea} ${touched && errors && styles.error}`} />
            <ErrorMessage name={name} component="div" className={styles.errorMsg} />
          </fieldset>
    )
}  
export default Textarea