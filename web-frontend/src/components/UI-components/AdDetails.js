import * as React from 'react';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../../App.css"
import { baseurl } from '../../core';
import axios from 'axios';

export default function AdDetails(props) {
    const { id } = useParams()
    console.log(id)

    const [posts, setPosts] = useState([])


    useEffect(() => {
        axios.get(`${baseurl}/api/v1/get_ad_vehicle/${id}`,
            {
                withCredentials: true
            })
            .then(response => {
                console.log("asad",response.data)
                setPosts(()=> response.data)
                // console.log(posts)
            })
            .catch(err => alert("Error in getting data"))
    }, [])

  return (
      
    <div class="container py-5">
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src={posts?.images} class="d-block w-100" alt="..."></img>
            </div>
            <div class="carousel-item">
                <img src={posts?.images} class="d-block w-100" alt="..."></img>
            </div>
            <div class="carousel-item">
                <img src={posts?.images} class="d-block w-100" alt="..."></img>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

    <h1 class="text-center py-5">DETAILS</h1>

    <div class="accordion-body">
        <ul CLASS="ul">
            <li class="full"><span class="left">TITLE</span><span class="right">{posts.title}</span>
            </li>
            <li class="full"><span class="left">MAKE</span><span class="right"> {posts.make}</span>
            </li>
            <li class="full"><span class="left">MODEL</span><span class="right"> {posts.year}</span>
            </li>
            <li class="full"><span class="left">KM'S DRIVEN</span> <span class="right">{posts.kms}</span>
            </li>
            <li class="full"><span class="left">FUEL TYPE</span> <span class="right"> {posts.fueltype}</span>
            </li>
            <li class="full"><span class="left">CONDITION</span> <span class="right"> {posts.condition}</span>
            </li>
            <li class="full"><span class="left">REGISTERED AREA</span> <span class="right"> {posts.registeredarea}</span>
            </li>
            <li class="full"><span class="left">STATE</span> <span class="right"> {posts.state}</span>
            </li>
            <li class="full"><span class="left">NAME</span> <span class="right"> {posts.name}</span>
            </li>
            <li class="full"><span class="left">PHONE</span> <span class="right"> {posts.phone}</span>
            </li>
            <li class="full"><span class="left">PRICE</span> <span class="right"> {posts.price}</span>
            </li>

            
        </ul>
    </div>

    <h1 class="text-center py-5">DESCRIPTION</h1>

    <div class="accordion-body">
        <p>{posts.description}</p>

    </div>
</div>
  );
}
