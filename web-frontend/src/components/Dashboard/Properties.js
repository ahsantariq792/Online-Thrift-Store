import '../../App.css';
import React, { useEffect, useState } from 'react';
import ImgMediaCard from "../UI-components/ImgMediaCard";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import Button from "@mui/material/Button";
import '../../App.css';
import CenteredTabs from '../UI-components/Tabs';



function Properties() {

    return (
        <>
            <CenteredTabs />
            <h1 style={{ margin: '2%' }}>Properties</h1>

            <div className="dashboard-main">
                <ImgMediaCard
                    title="Tapered Training Trousers"
                    link="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/a10699af-0b24-4787-bf5e-d0315ffd8ecc/dri-fit-tapered-training-trousers-Vz377J.png"
                    price="Rs 2250/-"
                />
                <ImgMediaCard
                    title="Sportswear Club Fleece"
                    link="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/65580368-8756-4baf-b846-6648400cf137/sportswear-club-fleece-older-trousers-sfKXMD.png"
                    price="Rs 3200/-"
                />
                <ImgMediaCard
                    title="Sportswear Tech Fleece"
                    link="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/9e6d966b-d9fa-4e8c-ba71-d681463a125b/sportswear-tech-fleece-older-trousers-jx67ms.png"
                    price="Rs 3550/-"
                />
                <ImgMediaCard
                    title="Air Max Men's Woven Cargo Trousers"
                    link="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/2ed5c803-fdd5-4750-87ad-14072dd38284/air-max-woven-cargo-trousers-RGGqX4.png"
                    price="Rs 4250/-"
                />
                <ImgMediaCard
                    title="Grey Track Pants With Black Stripped Sides"
                    link="https://cdn.shopify.com/s/files/1/0403/9858/6011/products/DSC_8924copy_1024x1024.jpg?v=1601581815"
                    price="Rs 1550/-"
                />
                <ImgMediaCard
                    title="Sportswear Club Men's French Terry Trouser"
                    link="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/9e311b4c-a59f-4190-a50a-1ee6745ae0b9/sportswear-club-french-terry-trousers-zc96jq.png"
                    price="Rs 2300/-"
                />
            </div>
        </>
    );
}

export default Properties;