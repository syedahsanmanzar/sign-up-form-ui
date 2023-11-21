import * as React from 'react';
import TextField from '@mui/material/TextField';
import "./CM,style.css"

export default function FormPropsText2Fields(props) {
    return (
        <TextField
            id={props.id}   
            label={props.input_label}
            type="text"
            placeholder={props.placeholder}
            className="input2_width"
        />
    )
}