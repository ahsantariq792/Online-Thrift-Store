// import '../../App.css';
// import React, { useEffect, useState } from 'react';
// import { GlobalContext } from '../../context/Context';
// import { useContext } from "react";
// // import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'react-router-dom';
// import Button from "@mui/material/Button";
// import { baseurl } from '../../core';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// function Dashboard() {
//     const { id } = useParams()
//     let { state, dispatch } = useContext(GlobalContext);
//     console.log(id)
//     const [posts, setPosts] = useState([])
//     console.log("saad", posts)
//     const getData = async () => {
//         await axios.get(`${baseurl}/api/v1/loan_apply/${id}`,
//             {
//                 withCredentials: true
//             })
//             .then(response => {
//                 // console.log("asad", response.data)
//                 setPosts(() => response.data)
//                 console.log(response.data)
//             })
//             .catch(err => alert("Error in getting data"))

//     }


//     useEffect(() => {
//         getData()
//     }, [])

//     return (
//         <>
           

//             <h1>this is dashboard</h1>






//         </>
//     );
// }

// export default Dashboard;


import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import "../../App.css"
import { baseurl } from '../../core';
import axios from 'axios';



export default function LoanDetails(props) {

    const { id } = useParams()
    console.log(id)

    const [posts, setPosts] = useState([])
    const [imageUrl, setImageUrl] = useState('');

    console.log("this is ad details", posts)
    const getData = async () => {
        await axios.get(`${baseurl}/api/v1/loan_apply/${id}`,
            {
                withCredentials: true
            })
            .then(response => {
                console.log("asad", response.data)
                setPosts(() => response.data)
                console.log(posts)
            })
            .catch(err => alert("Error in getting data"))
    }

    useEffect(() => {
        getData()
    }, [])





    return (

        <div className="container py-5" style={{ overflowX: "hidden" }}>

            <h1 className="text-center py-5">USER DETAILS</h1>
            <div className="accordion-body">
                <ul className="ul">

                    <li className="full"><span className="left">JOB</span><span className="right"> {posts?.jobtitle}</span>
                    </li>
                    <li className="full"><span className="left">SALARY</span><span className="right">{posts?.salary}</span>
                    </li>
                    <li className="full"><span className="left">STATE</span><span className="right"> {posts?.state}</span>
                    </li>
                    <li className="full"><span className="left">CITY</span><span className="right"> {posts?.city}</span>
                    </li>
                    <li className="full"><span className="left">RESIDENTIAL ADDRESS</span><span className="right"> {posts?.address}</span>
                    </li>
                    <li className="full"><span className="left">OFFICE ADDRESS</span><span className="right"> {posts?.officeaddress}</span>
                    </li>
                </ul>
            </div>


            <h1 className="text-center py-5">Job Proof</h1>
            <ul className="ul" style={{ textAlign: "center" }}>
                <img style={{ marginBottom: "5%", marginTop: "2%", height: "80%", width: "60%" }} src={posts?.imageurl1} />
            </ul>



            <h1 className="text-center py-5">User Tax Certicate</h1>
            <ul className="ul text-center">
                <img style={{ marginBottom: "5%", marginTop: "2%", height: "260px" }} src={posts?.imageurl4} />
            </ul>

            <h1 className="text-center py-5">User Nic DETAILS</h1>
            <ul className="ul text-center">

                <h4 style={{ color: "black" }}>NIC Front
                </h4>
                <img style={{ marginBottom: "5%", marginTop: "2%", height: "260px" }} src={posts?.imageurl3} />

                <h4 style={{ color: "black" }}>NIC Back</h4>
                <img style={{ marginBottom: "5%", marginTop: "2%", height: "260px" }} src={posts?.imageurl3} />

            </ul>







            <h1 className="text-center py-5">Product DETAILS</h1>

            <div className="accordion-body">
                <ul className="ul">
                    <li className="full"><span className="left">TITLE</span><span className="right">{posts?.title}</span>
                    </li>
                    <li className="full"><span className="left">MAKE</span><span className="right"> {posts?.make}</span>
                    </li>
                    <li className="full"><span className="left">PRICE</span><span className="right"> {posts?.price}</span>
                    </li>
                    <li className="full"><span className="left">CONDITION</span> <span className="right"> {posts?.condition}</span>
                    </li>
                </ul>
            </div>

            <h1 className="text-center py-5">Product Images</h1>
            <img style={{ height: "80%", width: "80%", margin: "8% 10%" }} src={posts?.producturl} ></img>



            <h1 className="text-center py-5">Loan DETAILS</h1>

            <div className="accordion-body">
                <ul className="ul">
                    <li className="full"><span className="left">AMOUNT</span><span className="right">{posts?.amount}</span>
                    </li>
                    <li className="full"><span className="left">STARTING DATE</span><span className="right"> {posts?.sdate}</span>
                    </li>
                    <li className="full"><span className="left">ENDING DATE</span> <span className="right"> {posts?.edate}</span>
                    </li>
                </ul>
            </div>




            <h1 className="text-center py-5">Third Person DETAILS</h1>
            <div className="accordion-body">
                <ul className="ul">

                    <li className="full"><span className="left">NAME</span><span className="right"> {posts?.tname}</span>
                    </li>
                    <li className="full"><span className="left">CNIC</span><span className="right">{posts?.tcnic}</span>
                    </li>
                    <li className="full"><span className="left">PHONE NUMBER</span><span className="right"> {posts?.tphone}</span>
                    </li>
                    <li className="full"><span className="left">RESIDENTIAL ADDRESS</span><span className="right"> {posts?.taddress}</span>
                    </li>
                </ul>
            </div>

            <h1 className="text-center py-5">Third Person Nic DETAILS</h1>
            <ul className="ul text-center">

                <h4 style={{ color: "black" }}>NIC Front</h4>
                <img style={{ marginBottom: "5%", marginTop: "2%", height: "260px" }} src={posts?.imageurl5} />

                <h4 style={{ color: "black" }}>NIC Back</h4>
                <img style={{ marginBottom: "5%", marginTop: "2%", height: "260px" }} src={posts?.imageurl6} />

            </ul>



            <h1 className="text-center py-5">DESCRIPTION</h1>

            <div className="accordion-body">
                <ul className="ul text-center">
                    <p style={{ color: "black", width: "60%" }}>{posts?.description}</p>
                </ul>
            </div>
        </div>

    );
}
