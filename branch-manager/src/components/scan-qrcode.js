import React, { useEffect } from 'react';
import QrReader from 'react-qr-reader';
import { useState } from 'react';
import { useRef } from 'react';
import { baseurl } from '../core';
import axios from 'axios'

export const ScanQrcode = () => {
    const [id, setScanResultFile] = useState('');
    const qrRef = useRef(null);
    const [posts, setPosts] = useState([])
    console.log("this is application details", posts)

    console.log(id)

    const handleErrorFile = (error) => {
        console.log(error);
    }
    const handleScanFile = (result) => {
        if (result) {
            setScanResultFile(result);

        }
    }
    const onScanFile = () => {
        qrRef.current.openImageDialog();
    }
    const handleErrorWebCam = (error) => {
        console.log(error);
    }
    const handleScanWebCam = (result) => {
        if (result) {
            setScanResultFile(result);
        }
    }
    const checkDetails=async ()=>{
    
console.log(baseurl)
console.log(`${baseurl}/api/v1/loan_applyy/${id}`)
  
            await axios.get(`${baseurl}/api/v1/loan_applyy/${id}`,
                {
                    withCredentials: true
                })
                .then(response => {
                    // console.log("asad", response.data)
                    setPosts(() => response.data)
                    console.log(response.data )
                })
                .catch(err => alert("Error in getting data"))
        
    }
    

    return (
        <div>

            <QrReader
                delay={300}
                style={{ width: '100%' }}
                onError={handleErrorWebCam}
                onScan={handleScanWebCam}
            />
            <button onClick={checkDetails}>CHECK DETAILS</button>
            <button onClick={onScanFile}>Scan Qr Code</button>
            <QrReader
                ref={qrRef}
                delay={300}
                style={{ width: '100%' }}
                onError={handleErrorFile}
                onScan={handleScanFile}
                legacyMode
            />
        </div>

    );
};
