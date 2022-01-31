import React, { useEffect } from 'react';
import { GlobalContext } from '../context/Context';
import { useContext } from "react";
import QrReader from 'react-qr-reader';
import { useState } from 'react';
import { useRef } from 'react';
import { baseurl } from '../core';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
            <h1>hi {state?.user?.email}</h1>
            <QrReader
                delay={300}
                style={{ width: '100%' }}
                onError={handleErrorWebCam}
                onScan={handleScanWebCam}
            />
            <Link to={`/dashboard/${id}`}> Check Details</Link>
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
