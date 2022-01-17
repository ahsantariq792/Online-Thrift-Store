import '../App.css';
// import {useHistory} from "react-router-dom";
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from "@mui/material/Button";
import { TextField } from '@mui/material';
import axios from 'axios';
import { baseurl } from '../core';
import { GlobalContext } from '../context/Context';
import { useContext } from "react";


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





function Loginform() {

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
      email: '',
      password: '',

    },
    onSubmit: submit
  },
  );


  return (
    // <>
    //   <div className="app-main">
    //     <div className="main">
    //       <form className='user-form' onSubmit={formik.handleSubmit}>

    //         <h3> Login Form </h3>

    //         <TextField
    //           id="outlined-basic"
    //           name="email"
    //           label="email"
    //           className="inputbox"
    //           value={formik.values.email}
    //           onChange={formik.handleChange}

    //           error={formik.touched.email && Boolean(formik.errors.email)}
    //           helperText={formik.touched.email && formik.errors.email}


    //           variant="outlined" />

    //         <TextField
    //           id="outlined-basic"
    //           name="password"
    //           label="password"
    //           type="password"
    //           className="inputbox"

    //           value={formik.values.password}
    //           onChange={formik.handleChange}


    //           error={formik.touched.password && Boolean(formik.errors.password)}
    //           helperText={formik.touched.password && formik.errors.password}

    //           variant="outlined" />


    //         <Button id="btn" variant="contained" color="success" type="submit">
    //           Login
    //         </Button>
    //       </form>
    //     </div>
    //   </div>
    // </>


    <>
      <div className="container">

        <div className="row m-5 no-gutters shadow-lg">
          <div className="col-md-6 d-none  bg-light d-md-block">
            {/* <div className="mx-5 my-5">
              <h4 style={{ fontFamily: "cursive" }}><i className="fas fa-comments-dollar"></i>&nbsp;TS</h4>
            </div> */}
            <div style={{ fontFamily: "Impact, Haettenschweiler" }}>
              <h1 className="m-5"><center>THRIFT STORE</center></h1>
            </div><br /><br />
            <div className="mx-2" style={{ border: "2px solid black" }}>
              <p className="para1"><center>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facere dolorum consequatur quidem repudiandae repellat
                alias fuga maxime veniam magni aperiam.</center></p>
            </div><br /><br /><br />
            <div className="pic1" ><center>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh_l35eL1BNdqkRp5kgeS2jpdurdXUQYwtdQ&usqp=CAU" /></center>
            </div>
          </div>
          <div className="col-md-6  p-5" style={{ backgroundColor: "rgba(128, 128, 128, 0.274)" }}>
            <h2 className="pb-4" style={{ fontFamily: "cursive", marginBottom: "10px" }}><center><b> WELCOME </b></center></h2><br />
            <div className="form-style">
              <form onSubmit={formik.handleSubmit}>
                <div className="form-group pb-3">
                  {/* <input type="email" placeholder="Email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /> */}

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
                  {/* <input type="password" placeholder="Password" className="form-control" id="exampleInputPassword1" /> */}

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
                  <div className="d-flex align-items-center"><input name="" type="checkbox" value="" /> <span className="pl-2 font-weight-bold">Remember Me</span></div>
                  <div>Forget Password?</div>
                </div><br />
                <div className="pb-2">
                  <button type="submit" id="userbtn" className="btn btn-dark w-100 font-weight-bold mt-2">LOGIN</button>
                </div>
                <p><center>New User?&nbsp;&nbsp;&nbsp;&nbsp;<b>SIGNUP HERE</b> </center></p>
              </form>
              <div className="sideline"><center>----------------------  OR   ----------------------</center></div>
              <div><br />
                <button className="btn btn-primary w-100 font-weight-bold mt-2 userbtn"><i className="fab fa-facebook-f"></i>&nbsp;&nbsp;&nbsp; Login With Facebook</button>
              </div>
              <div>
                <button className="btn btn-danger w-100 font-weight-bold mt-2 userbtn"><i className="fab fa-google"></i>&nbsp;&nbsp;&nbsp; Login With Google</button>
              </div>
              <div>
                <button className="btn btn-info w-100 font-weight-bold mt-2 userbtn"><i className="fab fa-twitter"></i>&nbsp;&nbsp;&nbsp; Login With Twitter</button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Loginform;