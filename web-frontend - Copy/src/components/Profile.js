import axios from 'axios';
import { useState, useEffect } from "react"
import { baseurl } from '../core';
// import { GlobalContext } from '../context/Context';
// import { useContext } from "react";
import Profileimage from '../images/profile.jpg'
import './../App.css'

function Profile() {

    // let { state, dispatch } = useContext(GlobalContext);

    const [profile, setProfile] = useState({})

    useEffect(() => {

        axios.get(`${baseurl}/api/v1/profile`, {
            withCredentials: true
        })
            .then((res) => {
                console.log("res +++: ", res.data);
                setProfile(res.data)
            })
    }, [])


    return (
        <>
            <div className="profile">

                {/* <h1 id="profileheader"><div class="text">
                    <span>M</span>
                    <span>Y</span>
                    <span>P</span>
                    <span>R</span>
                    <span>O</span>
                    <span>I</span>
                    <span>L</span>
                    <span>E</span>
                </div></h1> */}


                <h1 id="profileheader">My Profile</h1>
                <img id="profilepic" src={Profileimage} alt="profilepic" />
                <h2 id="personaldtl">Personal Details</h2>

                <div className="info">
                <h4>Name: <span> {profile?.name} </span> </h4>
                <h4>Email: {profile?.email} </h4>
                <h4>Phone: {profile?.phone}</h4>

                </div>
            </div>


        </>
    );
}

export default Profile;


