import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import "../../App.css"
import { baseurl } from '../../core';
import axios from 'axios';
import { Button } from '@mui/material';
import QRCode from 'qrcode';
// var PDFDocument = require('pdfkit');
// var fs = require('fs');
import { jsPDF } from "jspdf";
// const nodemailer = require("nodemailer");
import { Mailer } from 'nodemailer-react'
// var contents = fs.readFileSync("sliderImages", 'utf8');


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
                // console.log("asad", response.data)
                setPosts(() => response.data)
                // console.log(posts )
            })
            .catch(err => alert("Error in getting data"))
    }

    const update = async () => {
        await axios.put(`${baseurl}/api/v1/loan_apply/${id}`,
            {
                qrcode: imageUrl,
                status: "Approved"

            },
            {
                withCredentials: true
            }
            )
            .then((response) => {
                console.log("qrcode")
            })
            .catch((error) => {
                console.log("error", error)
            })
            
        }
        

    
    
    async function Accept() {
        try {
            const response = await QRCode.toDataURL(id)
            console.log(response);
            setImageUrl(response);
            
        }
        catch (error) {
            console.log(error)
        }
        await update()

    }

    function sendQR(){
        const doc = new jsPDF();
        console.log("imageUrl", imageUrl)
        doc.addImage(imageUrl, 55, 40, 100, 100);
        doc.text(`Congratulations User`, 70, 150)
        doc.text(`Your Loan Request has been approved against the ${posts[0]?.title}`, 40, 160)
        doc.save(`${id}.pdf`);
    }


    useEffect(() => {
        getData()
    }, [])

    return (

        <div class="container py-5">
            <img src={imageUrl} ></img>

            <h1 class="text-center py-5">Product DETAILS</h1>

            <div class="accordion-body">
                <ul CLASS="ul">
                    <li class="full"><span class="left">TITLE</span><span class="right">{posts[0]?.title}</span>
                    </li>
                    <li class="full"><span class="left">MAKE</span><span class="right"> {posts[0]?.make}</span>
                    </li>
                    <li class="full"><span class="left">MODEL</span><span class="right"> {posts[0]?.make}</span>
                    </li>

                    <li class="full"><span class="left">CONDITION</span> <span class="right"> {posts[0]?.condition}</span>
                    </li>
                </ul>
            </div>


            <h1 class="text-center py-5">USER DETAILS</h1>
            <div class="accordion-body">
                <ul CLASS="ul">
                    <li class="full"><span class="left">TITLE</span><span class="right">{posts[0]?.salary}</span>
                    </li>
                    <li class="full"><span class="left">MAKE</span><span class="right"> {posts[0]?.jobtitle}</span>
                    </li>
                    <li class="full"><span class="left">MODEL</span><span class="right"> {posts[0]?.amount}</span>
                    </li>

                    <li class="full"><span class="left">CONDITION</span> <span class="right"> {posts[0]?.address}</span>
                    </li>
                </ul>
            </div>




            <h1 class="text-center py-5">DESCRIPTION</h1>

            <div class="accordion-body">
                <p>{posts[0]?.description}</p>


            </div>

            <Button onClick={Accept} variant="contained" className="order" color="success">Accept</Button>

            <Button variant="contained" className="order" color="error">Reject</Button>

            <Button onClick={sendQR} variant="contained" className="order" color="primary">Send QR code</Button>

        </div>

    );
}
