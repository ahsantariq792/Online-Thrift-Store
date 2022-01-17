import '../App.css';
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from "@mui/material/Button";
import { TextField } from '@mui/material';
import axios from 'axios';
import { baseurl } from '../core';

const submit = (values,{ resetForm }) => {
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


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  name: yup
    .string('Enter your password')
    .min(4, 'Name should be of minimum 4 characters length')
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

});





function Signup() {

  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: {
      email: '',
      name: '',
      phone:'',
      password: ''
     
    },
    onSubmit: submit
  },
  );


  return (
    <>
      <div className="app-main"> 
        <div className="main">
          <form className='user-form' onSubmit={formik.handleSubmit}>

            <h3> Sign up Form </h3>

            <TextField
              id="outlined-basic"
              name="name"
              label="name"
              className="inputbox"

              value={formik.values.name}
              onChange={formik.handleChange}


              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}

              variant="outlined" />


            <TextField
              id="outlined-basic"
              name="email"
              label="email"
              className="inputbox"
              value={formik.values.email}
              onChange={formik.handleChange}

              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}


              variant="outlined" />

            <TextField
              id="outlined-basic"
              name="phone"
              label="phone"
              className="inputbox"
              value={formik.values.phone}
              onChange={formik.handleChange}

              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}


              variant="outlined" />


            <TextField
              id="outlined-basic"
              name="password"
              label="password"
              type="password"
              className="inputbox"

              value={formik.values.password}
              onChange={formik.handleChange}


              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}

              variant="outlined" />


            <Button id="btn" variant="contained" color="success" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;