import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import "../../App.css"
import { baseurl } from '../../core';
import axios from 'axios';
import { Button } from '@mui/material';
import QRCode from 'qrcode';
import { jsPDF } from "jspdf";
import { Mailer } from 'nodemailer-react'


export default function Feedbacks(props) {

    

    const [posts, setPosts] = useState([])

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

            <h1 className="text-center py-5">CUSTOMER FEEDBACKS</h1>
            <div className="accordion-body">
                <ul className="ul">

                    <li className="full"><span className="left">CUSTOMER NAME</span><span className="right"> {posts?.name}</span>
                    </li>
                    <li className="full"><span className="left">EMAIL</span><span className="right">{posts?.salary}</span>
                    </li>
                    <li className="full"><span className="left">PHONE</span><span className="right"> {posts?.state}</span>
                    </li>
                    <li className="full"><span className="left">MESSAGE</span><span className="right"> {posts?.city}</span>
                    </li>
                </ul>
            </div>
        </div>

    );
}
