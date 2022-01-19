import React from 'react'
import { Formik, Form } from 'formik'
import { TextField } from './TextField'
import * as yup from 'yup'
import axios from 'axios';
import { baseurl } from '../core';

const submit = (values, { resetForm }) => {
  console.log("values", values)
  axios.post(`${baseurl}/api/v1/signup`,
    {
      name: values.name,
      email: values.email,
      phone: values.phone,
      password: values.password

    })
    .then(res => {
      console.log(res.data);
      // alert('User Signed in')
      resetForm({})
    })
}





const SignupformChild = () => {

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


  const validate = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    name: yup
      .string('Enter your password')
      .min(3, 'Name should be of minimum 4 characters length')
      .required('Name is required'),

    phone: yup
      .string('Enter your phone no.')
      .matches(phoneRegExp, 'Phone number is not valid')
      .min(11, 'Phone should contain 11 digits')
      .max(11, 'Phone should contain 11 digits')
      .required('phone number is required'),

    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),


  })
  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
        email: '',
        password: '',

      }}
      validationSchema={validate}
      onSubmit={submit}
    >
      {formik => (
        <div>
          {/* <div className="container mt-3">
            <div className="row">
              <div className="col-md-5"></div> */}

          <h1 className="my-4 font-weight-bold-display-4">Sign Up</h1>
          <Form>
            <TextField label="Name" name="name" type="text"></TextField>
            <TextField label="Phone" name="phone" type="text"></TextField>
            <TextField label="Email" name="email" type="text"></TextField>
            <TextField label="Password" name="password" type="password"></TextField>
            <button className="btn btn-dark mt-3 mr-3" style={{ height: "40px" }} type="submit">Submit</button>
            <button className="btn btn-danger mt-3 ml-3" style={{ height: "40px" }} type="reset">Reset</button>

          </Form>
          {/* <div className="col-md-7 my-auto">
                <img className="img-fluid w-100" src={image} alt="image"></img>
              </div>
            </div> */}

          {/* </div> */}
        </div>
      )}
    </Formik>

  )
}

export default SignupformChild;