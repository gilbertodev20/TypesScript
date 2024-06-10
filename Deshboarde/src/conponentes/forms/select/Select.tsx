import React from "react";

import { Field, ErrorMessage } from 'formik';
import styles from './Select.module.css'
interface sectprops {
    label: string;
    name: string;
    options: string[];
    errors?: string;
    touched?: boolean;
}
const Select: React.FC<sectprops> = ({label, name, options, errors, touched}) => {
    return(
     <fieldset className={styles.formGroup}>
        <label htmlFor={name} className={styles.label}>
            {label}:
        </label>
        <Field
            as="select"
            name={name}
            id={name}
            className={`${styles.select} ${touched && errors && styles.error}`}
        >
            <option value="">Selecione</option>
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </Field>
        <ErrorMessage name={name} component="div" className={styles.errorMsg}/>
    </fieldset>
    )
}

export default Select