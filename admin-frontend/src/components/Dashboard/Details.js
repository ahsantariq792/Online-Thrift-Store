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


    const update = async () => {
        console.log(posts.email)
        await axios.put(`${baseurl}/api/v1/loan_apply/${id}/${posts.email}`,
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

        await axios.put(`${baseurl}/api/v1/loan_apply/${id}/${posts.email}`,
            {
                status: "Rejected",
                qrcode: ''


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
    //     doc.text(`Your Loan Request has been approved against the ${posts?.title}`, 40, 160)
    //     doc.save(`${id}.pdf`);
    // }




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

            <div className='loan_buttons py-05'>
                <Button onClick={Accept} variant="contained" className="loanbtn" color="success">Accept</Button>
                <Button onClick={Reject} variant="contained" className="loanbtn" color="error">Reject</Button>
                {/* <Button onClick={sendQR} variant="contained" className="loanbtn" color="primary">Send QR code</Button> */}
            </div>
        </div>

    );
}
