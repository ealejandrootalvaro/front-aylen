import React from 'react';

import TextField, { IProps } from './Text';

export default function Password(props: IProps) {
    return <TextField {...props} type="password" />
}