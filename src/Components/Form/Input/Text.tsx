import React from 'react';
import TextField from '@material-ui/core/TextField';
import {Field} from 'formik';

export interface IProps {
    label?: string,
    type?: string,
    name: string
}



export default function Text({label, name, type="text"} : IProps) {
    return (
        <Field
            name={name}
            label={label}
            type={type}
            as={TextField}
        />
    );
}