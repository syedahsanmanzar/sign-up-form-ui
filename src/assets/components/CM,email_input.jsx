import * as React from 'react';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormPropsEmailFields(props) {
    return (
        <TextField
            id={props.id}
            label="Email"
            type="email"
            autoComplete="current-email"
            placeholder="ahsan@manzar.com"
            className="email_width"
        />
    )
}