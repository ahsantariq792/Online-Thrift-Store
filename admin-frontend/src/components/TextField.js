import { ErrorMessage,useField } from 'formik'
import React from 'react'

export const TextField = ({label,...props}) => {
    const [field,meta]=useField(props)

    return (
        <div className="mb-2">
            <label htmlFor={field.name}>{label}</label>
            <input 
            className={`form-control shadow-none  ${meta.touched && meta.error && 'is-invalid' }`}
            {...field} {...props} autoComplete="off" ></input>
            <ErrorMessage component="div" name={field.name} className="error"></ErrorMessage>
        </div>
    )
}
