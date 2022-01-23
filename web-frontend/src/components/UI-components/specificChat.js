import React from 'react';
import { GlobalContext } from '../../context/Context';

import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { baseurl } from '../../core';
import moment from 'moment';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
export const SpecificChat = () => {
    let { state, dispatch } = useContext(GlobalContext);
    const email = state?.user?.email
    const { to_email } = useParams()

    const [posts, setPosts] = useState([])
    console.log(posts)
    const [message, setMessage] = useState()
    const [isMore, setIsMore] = useState(true)


    // const Submit = (values, { resetForm }) => {
    const Submit = () => {

        // console.log("values")
        let m = moment().format('MMMM Do YYYY')
        console.log(to_email)
        axios.post(`${baseurl}/api/v1/post`,
            {
                post: message,
                time: m,
                to_email: to_email,
            }, {
            withCredentials: true
        })
            .then(res => {
                console.log("postdata", res.data);
                // resetForm({});

            })
    }
    useEffect(() => {

        axios.get(`${baseurl}/api/v1/post/${to_email}/${email}/?page=0`,
            // axios.get(`${baseurl}/api/v1/post?email=asadali5401@gmail.com`,

            {
                withCredentials: true
            })
            .then(response => {
                console.log("asad", response.data)
                setPosts(response.data)
            })
            .catch(err => alert("Error in getting data"))
    }, [])

    useEffect(() => {
        const socket = io(baseurl);
        // to connect with locally running Socker.io server

        socket.on('connect', function () {
            console.log("connected to server")
        });

        socket.on('disconnect', function (message) {
            console.log("disconnected from server: ", message);
        });

        socket.on('POSTS', function (data) {
            console.log(data);
            setPosts((prev) => [data, ...prev])
        });

        return () => {
            socket.close();
        };


    }, []);


    return <div>
        <input type="text" onChange={e => { setMessage(e.target.value) }}></input>
        <button onClick={Submit}>SUBMIT</button>
        {posts?.map((posts, index) => (

            <div className="postcard">


                Name :{posts?.post}<br></br>
                {/* Time :{posts?.time}<br></br>
                                Posts :{posts?.post}<br></br> */}
                Email :{posts?.email}<br></br>
                To Email :{posts?.to_email}<br></br>

            </div>
        )

        )}
    </div>;
};
