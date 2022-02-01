import React from 'react'
import '../../App.css'
import { useEffect, useState } from 'react';
import { GlobalContext } from '../../context/Context';
import { useContext } from 'react';
import { baseurl } from '../../core';
import axios from 'axios'
import { jsPDF } from "jspdf";
const MyQrCode = () => {
    let { state, dispatch } = useContext(GlobalContext);
    const email = state?.user?.email
    const name = state?.user?.name
    console.log(email)
    const [post, setPosts] = useState([])
    console.log("Loan Details", post)
    const getData = async () => {
        await axios.get(`${baseurl}/api/v2/loan_apply/${email}`,
            {
                withCredentials: true
            })
            .then(response => {
                //   if(response.data[0].status=="Approved"){
                setPosts(() => response.data)
                //   }

            })
            .catch(err => alert("Error in getting data"))
    }
    function download() {
        console.log(post.status)
        if (post.status == "Approved") {
            const doc = new jsPDF();
            console.log("imageUrl", post.qrcode)
            doc.addImage(post.qrcode, 55, 40, 100, 100);
            doc.text(`Congratulations ${name}`, 20, 150);
            var text=`We are pleased to inform you that your application for loan request has been verified. The item that you wanted to buy is ${post.title} which was manufactured by ${post.make}. You want an amount of ${post.amount} Rs to buy an item of ${post.price} Rs.If you are really interested and still looking for the loan You need to visit the nearest branch of our listed banks along with the hardcopy of all the uploaded documents. `

            var splitText = doc.splitTextToSize(text, 250);
            var pageHeight = doc.internal.pageSize.height;
            doc.setFontSize(11);
            var y = 160;
            for (var i = 0; i < splitText.length; i++) {
                if (y > 275) {
                    y = 160;
                    doc.addPage();
                }
                doc.text(20, y, splitText[i]);
                y = y + 5;
            }
            // doc.text(`Congratulations User`, 70, 150);
            // doc.text(`Your Loan Request has been approved against the ${post?.title}`, 40, 160);
            doc.save(`${post._id}.pdf`);
            doc.output('dataurlnewwindow');
        }
        else {
            console.log("not approved")
        }

    }


    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <div class="pdfcontainer">

                <h2>Your Application is <span style={{ fontStyle: "italic" }}>{post?.status}</span></h2>
                {(post?.status == "Approved") ? <button onClick={download} className="pdfbtn">DOWNLOAD PDF</button>
                    :
                    ((post?.status == "Pending") ? <h4 style={{ color: "grey", fontStyle: "italic" }}>Plz wait for Approval</h4>
                        :
                        <h4 style={{ color: "grey", fontStyle: "italic" }}>Sorry Your Request has been Rejected</h4>)
                }
            </div>

        </>
        // <button onClick={download}>QR CODE<button/>
    )

}
export default MyQrCode;