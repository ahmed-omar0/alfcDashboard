import React from 'react'
import {  Field, ErrorMessage } from "formik";

function Input(props) {
    return (
        <div className="form-control d-flex flex-column">
            <label className="mb-1" htmlFor={props.name}>{props.label}</label>
            <Field type={props.type} id={props.name} name={props.name}/>
            <ErrorMessage component="span" className="error" name={props.name}/>
        </div>
    )
}

export default Input

