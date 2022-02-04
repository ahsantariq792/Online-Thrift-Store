import React, { useEffect } from 'react';
import { GlobalContext } from '../context/Context';
import { useContext } from "react";
import QrReader from 'react-qr-reader';
import { useState } from 'react';
import { useRef } from 'react';
import { baseurl } from '../core';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export const ScanQrcode = () => {

    let { state, dispatch } = useContext(GlobalContext);


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



    return (
        <div>
            {/* <h1>hi {state?.user?.email}</h1> */}
            <QrReader
                delay={300}
                style={{ width: '100%' }}
                onError={handleErrorWebCam}
                onScan={handleScanWebCam}
            />
            {/* <Link to={`/dashboard/${id}`}> Check Details</Link>
            <button onClick={onScanFile}>Scan Qr Code</button> */}
            <div className='productdetail_buttons'>

                <Link to={`/dashboard/${id}`} style={{ textDecoration: "none",marginRight: "2%" }}>
                    <Button variant="contained" className="productdetailbtn" color="primary">Check Details</Button>

                </Link>
                <Button variant="contained" onClick={onScanFile} className="productdetailbtn" color="success">Scan Qr Code</Button>

            </div>

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
