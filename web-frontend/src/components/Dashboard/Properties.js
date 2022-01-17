import '../../App.css';
import React, { useEffect, useState } from 'react';
import ImgMediaCard from "../UI-components/ImgMediaCard";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import Button from "@mui/material/Button";
import '../../App.css';
import CenteredTabs from '../UI-components/Tabs';
import { baseurl } from '../../core';
import axios from 'axios';


function Properties() {

    const [posts, setPosts] = useState([])


    useEffect(() => {
        axios.get(`${baseurl}/api/v1/get_ad_house`,
            {
                withCredentials: true
            }
            )
            .then(response => {
                console.log(response.data)
                setPosts(()=> response.data)
                console.log(posts)
            })
            .catch(err => alert("Error in getting data"))
    }, [])

    return (
        <>
            <CenteredTabs />
            <h1 style={{ margin: '2%' }}>Properties For Sale</h1>

            <div className="dashboard-main">
            {posts?.map((posts, index) => (
                    <ImgMediaCard
                        title={posts?.title}
                        make={posts?.name}
                        condition={posts?.furniture}
                        link="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/a10699af-0b24-4787-bf5e-d0315ffd8ecc/dri-fit-tapered-training-trousers-Vz377J.png"
                        price={posts?.price}

                    />
                ))}
            </div>
        </>
    );
}

export default Properties;