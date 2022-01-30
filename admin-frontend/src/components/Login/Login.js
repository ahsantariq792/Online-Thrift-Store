import '../../App.css';
// import {useHistory} from "react-router-dom";
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
// import Button from "@mui/material/Button";
import { TextField } from '@mui/material';
import axios from 'axios';
import { baseurl } from '../../core';
import { GlobalContext } from '../../context/Context';
import { useContext } from "react";
// import { Link } from 'react-router-dom';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),

  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});





function Login() {

  // let history = useHistory();
  let { state, dispatch } = useContext(GlobalContext);



  const submit = (values) => {
    console.log("values", values)


    axios.post(`${baseurl}/api/v1/login`,
      {
        email: values.email,
        password: values.password
      }, {
      withCredentials: true
    })
      .then(res => {
        console.log(res.data);
        alert('User Logined')
        if (res.data.email) {
          dispatch({
            type: "USER_LOGIN",
            payload: {
              name: res.data.name,
              email: res.data.email,
              _id: res.data._id
            }
          })
        }


      })
      .catch(error => {
        alert('Incorrect email or password')
      })



  }

  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: {
      email: 'ahsantariq792@gmail.com',
      password: '12345678',

    },
    onSubmit: submit
  },
  );


  return (
    <>
      <div className="container">

        <div className="row m-5 no-gutters shadow-lg">
          <div className="col-md-6 d-none  bg-light d-md-block">
            <div style={{ fontFamily: "Impact, Haettenschweiler" }}>
              <h1 className="m-5"><center>THRIFT STORE ADMIN</center></h1>
            </div><br /><br />
            <div className="mx-2" style={{ color: "grey", textAlign: "center" }}>
              {/* <p className="para1"><center>Welcome Admin! <br/> Use Your Credentials to login the system</center></p> */}
            </div>
            <div className="pic1" ><center>
              <img style={{height: "300px"}} src=" https://i.pinimg.com/originals/94/09/7e/94097e458fbb22184941be57aaab2c8f.png " /></center>
            </div>
          </div>
          <div className="col-md-6  p-5" style={{ backgroundColor: "rgba(128, 128, 128, 0.274)" }}>
            <h2 className="pb-4" style={{ fontFamily: "cursive", marginBottom: "10px" }}><center><b> WELCOME TO ADMIN LOGIN </b></center></h2><br />
            <div className="form-style">
              <form onSubmit={formik.handleSubmit}>
                <div className="form-group pb-3">
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

                </div>
                <div className="form-group pb-3">
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

                </div>
                <div className="d-flex align-items-center justify-content-between">
                </div><br />
                <div className="pb-2">
                  <button type="submit" id="userbtn" className="btn btn-dark w-100 font-weight-bold mt-2">LOGIN</button>
                </div>
              </form>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Login;