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
                console.log("qrcode accepetd")
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
    async function Reject() {

        await axios.put(`${baseurl}/api/v1/loan_apply/${id}`,
        {
            status: "Rejected"

        },
        {
            withCredentials: true
        }
    )
        .then((response) => {
            console.log("qrcode rejected")
        })
        .catch((error) => {
            console.log("error", error)
        })

    }

    // function sendQR() {
    //     const doc = new jsPDF();
    //     console.log("imageUrl", imageUrl)
    //     doc.addImage(imageUrl, 55, 40, 100, 100);
    //     doc.text(`Congratulations User`, 70, 150)
    //     doc.text(`Your Loan Request has been approved against the ${posts[0]?.title}`, 40, 160)
    //     doc.save(`${id}.pdf`);
    // }


    useEffect(() => {
        getData()
    }, [])

    return (

        <div className="container py-5" style={{ overflowX: "hidden" }}>

            <h1 className="text-center py-5">USER DETAILS</h1>
            <div className="accordion-body">
                <ul className="ul">

                    <li className="full"><span className="left">JOB</span><span className="right"> {posts[0]?.jobtitle}</span>
                    </li>
                    <li className="full"><span className="left">SALARY</span><span className="right">{posts[0]?.salary}</span>
                    </li>
                    <li className="full"><span className="left">STATE</span><span className="right"> {posts[0]?.state}</span>
                    </li>
                    <li className="full"><span className="left">CITY</span><span className="right"> {posts[0]?.city}</span>
                    </li>
                    <li className="full"><span className="left">RESIDENTIAL ADDRESS</span><span className="right"> {posts[0]?.address}</span>
                    </li>
                    <li className="full"><span className="left">OFFICE ADDRESS</span><span className="right"> {posts[0]?.officeaddress}</span>
                    </li>
                </ul>
            </div>


            <h1 className="text-center py-5">Job Proof</h1>
            <ul className="ul" style={{ textAlign: "center" }}>
                <img style={{ marginBottom: "5%", marginTop: "2%", height: "80%", width: "60%" }} src={posts[0]?.imageurl1} />
            </ul>



            <h1 className="text-center py-5">User Tax Certicate</h1>
            <ul className="ul text-center">
                <img style={{ marginBottom: "5%", marginTop: "2%", height: "260px" }} src={posts[0]?.imageurl4} />
            </ul>

            <h1 className="text-center py-5">User Nic DETAILS</h1>
            <ul className="ul text-center">

                <h4 style={{ color: "black" }}>NIC Front
                </h4>
                <img style={{ marginBottom: "5%", marginTop: "2%", height: "260px" }} src={posts[0]?.imageurl3} />

                <h4 style={{ color: "black" }}>NIC Back</h4>
                <img style={{ marginBottom: "5%", marginTop: "2%", height: "260px" }} src={posts[0]?.imageurl3} />

            </ul>







            <h1 className="text-center py-5">Product DETAILS</h1>

            <div className="accordion-body">
                <ul className="ul">
                    <li className="full"><span className="left">TITLE</span><span className="right">{posts[0]?.title}</span>
                    </li>
                    <li className="full"><span className="left">MAKE</span><span className="right"> {posts[0]?.make}</span>
                    </li>
                    <li className="full"><span className="left">PRICE</span><span className="right"> {posts[0]?.price}</span>
                    </li>
                    <li className="full"><span className="left">CONDITION</span> <span className="right"> {posts[0]?.condition}</span>
                    </li>
                </ul>
            </div>

            <h1 className="text-center py-5">Product Images</h1>
            <img style={{ height: "80%", width: "80%", margin: "8% 10%" }} src={posts[0]?.producturl} ></img>



            <h1 className="text-center py-5">Loan DETAILS</h1>

            <div className="accordion-body">
                <ul className="ul">
                    <li className="full"><span className="left">AMOUNT</span><span className="right">{posts[0]?.amount}</span>
                    </li>
                    <li className="full"><span className="left">STARTING DATE</span><span className="right"> {posts[0]?.sdate}</span>
                    </li>
                    <li className="full"><span className="left">ENDING DATE</span> <span className="right"> {posts[0]?.edate}</span>
                    </li>
                </ul>
            </div>




            <h1 className="text-center py-5">Third Person DETAILS</h1>
            <div className="accordion-body">
                <ul className="ul">

                    <li className="full"><span className="left">NAME</span><span className="right"> {posts[0]?.tname}</span>
                    </li>
                    <li className="full"><span className="left">CNIC</span><span className="right">{posts[0]?.tcnic}</span>
                    </li>
                    <li className="full"><span className="left">PHONE NUMBER</span><span className="right"> {posts[0]?.tphone}</span>
                    </li>
                    <li className="full"><span className="left">RESIDENTIAL ADDRESS</span><span className="right"> {posts[0]?.taddress}</span>
                    </li>
                </ul>
            </div>

            <h1 className="text-center py-5">Third Person Nic DETAILS</h1>
            <ul className="ul text-center">

                <h4 style={{ color: "black" }}>NIC Front</h4>
                <img style={{ marginBottom: "5%", marginTop: "2%", height: "260px" }} src={posts[0]?.imageurl5} />

                <h4 style={{ color: "black" }}>NIC Back</h4>
                <img style={{ marginBottom: "5%", marginTop: "2%", height: "260px" }} src={posts[0]?.imageurl6} />

            </ul>



            <h1 className="text-center py-5">DESCRIPTION</h1>

            <div className="accordion-body">
                <ul className="ul text-center">
                    <p style={{ color: "black", width: "60%" }}>{posts[0]?.description}</p>
                </ul>
            </div>

            <div className='loan_buttons py-05'>
                <Button onClick={Accept} variant="contained" className="loanbtn" color="success">Accept</Button>
                <Button onClick={Reject} variant="contained" className="loanbtn" color="error">Reject</Button>
                {/* <Button onClick={sendQR} variant="contained" className="loanbtn" color="primary">Send QR code</Button> */}
            </div>
        </div>

    );
}
