import * as React from 'react';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./CM,style.css"

export default function FormPropsTextFields(props) {
    return (
        <TextField
            id={props.id}   
            label={props.input_label}
            type="text"
            placeholder={props.placeholder}
            className='input_width'
        />
    )
}