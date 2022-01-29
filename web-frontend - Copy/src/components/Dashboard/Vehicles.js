import '../../App.css';
import React, { useEffect, useState } from 'react';
import ImgMediaCard from "../UI-components/ImgMediaCard";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import Button from "@mui/material/Button";
import '../../App.css';
import Footer from '../UI-components/Footer';

import CenteredTabs from '../UI-components/Tabs';
import { baseurl } from '../../core';
import axios from 'axios';



function Vehicles() {

    const [posts, setPosts] = useState([])
    console.log("here",posts)

    const getData=async()=>{
       await axios.get(`${baseurl}/api/v1/get_ad_vehicle`,
            {
                withCredentials: true
            })
            .then(response => {
                console.log(response.data)
                setPosts(()=> response.data)
                // console.log(posts)
            })
            .catch(err => alert("Error in getting data"))
    }


    useEffect(() => {
        getData()

    }, [])

    return (
        <>
            <CenteredTabs />
            <h1 style={{ margin: '2%', textAlign: 'center', color: "grey"  }}>Vehicles For Sale</h1>

            <div className="dashboard-main">
                {posts?.map((posts, index) => (
                    <ImgMediaCard
                        title={posts?.title}
                        make={posts?.make}
                        condition={posts?.condition}
                        image={posts?.imageurl1} 
                        price={posts?.price}

                    />
                ))}
            </div>
            <Footer />

        </>
    );
}

export default Vehicles;