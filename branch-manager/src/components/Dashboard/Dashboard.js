import '../../App.css';
import React, { useEffect, useState } from 'react';
import ImgMediaCard from "./ImgMediaCard";
import { GlobalContext } from '../../context/Context';
import { useContext } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Button from "@mui/material/Button";
import { baseurl } from '../../core';
import axios from 'axios';

function Dashboard() {
    let { state, dispatch } = useContext(GlobalContext);

    const [posts, setPosts] = useState([])
    console.log("saad", posts)
    const getData = async () => {
        await axios.get(`${baseurl}/api/v1/loan_apply`,
            {
                withCredentials: true
            })
            .then(response => {
                console.log(response.data)
                setPosts(() => response.data)
                console.log(posts)
                // console.log(state?.user?.email)

            })
            .catch(err => alert("Error in getting data"))

    }


    useEffect(() => {

        getData()
    }, [])

    return (
        <>
            {/* <h1 style={{ margin: '2%', textAlign: 'center', color: "grey" }}>Loan Applications</h1>

            <div className="dashboard-main">

                {posts?.map((posts, index) => (
                    <ImgMediaCard
                        title={posts?.title}
                        make={posts?.make}
                        condition={posts?.condition}
                        price={posts?.price}
                        image={posts?.imageurl1}
                        id={posts._id}




                    />
                ))}
            </div> */}

            <h1>this is dashboard</h1>

        </>
    );
}

export default Dashboard;