import React from 'react'
import { useEffect, useState } from 'react';
import { GlobalContext } from '../../context/Context';
import { useContext } from 'react';
import { baseurl } from '../../core';
import axios from 'axios'
import { jsPDF } from "jspdf";
const MyQrCode = () => {
    let { state, dispatch } = useContext(GlobalContext);
    const email = state?.user?.email
    console.log(email)
    const [post, setPosts] = useState([])
    console.log("Loan Details", post)
    const getData = async () => {
        await axios.get(`${baseurl}/api/v1/loan_apply/${email}`,
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
            doc.text(`Congratulations User`, 70, 150)
            doc.text(`Your Loan Request has been approved against the ${post?.title}`, 40, 160)
            doc.save(`${post._id}.pdf`);
            doc.output('dataurlnewwindow')

        }
        else{
            console.log("not approved")
        }

    }


    useEffect(() => {
        getData()
    }, [])
    return (
        <>
<h1>{post?.status}</h1>
            <button onClick={download}>DOWNLOAD</button>
        </>
        // <button onClick={download}>QR CODE<button/>
    )

}
export default MyQrCode;