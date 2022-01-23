import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment';
import io from 'socket.io-client';
import { baseurl } from '../../core';
import { GlobalContext } from '../../context/Context';
import { useContext } from 'react';
const Chat = () => {
    let { state, dispatch } = useContext(GlobalContext);
    const email= state?.user?.email
    const { to_email } = useParams()
    // console.log(email)



    // const to_email=email;

    const [posts, setPosts] = useState([])
    const [message,setMessage]=useState()
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
                to_email : to_email,
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
                console.log("asad",response.data)
                setPosts(response.data)
            })
            .catch(err => alert("Error in getting data"))
    }, [])

    useEffect(() => {
        const socket = io();
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
    const loadMore = () => {
        axios.get(`${baseurl}/api/v1/post?page=${posts.length}`,
            {
                withCredentials: true
            })
            .then((res) => {
                console.log("res +++: ", res.data);
                if (res.data?.length) {
                    const newPosts = [...posts, ...res.data]
                    setPosts(newPosts)
                } else {
                    setIsMore(false)
                }
            })
    }


    return (
        <>
        <input type="text" onChange={e=>{setMessage(e.target.value)}}></input>
        <button onClick={Submit}>SUBMIT</button>
        <button onClick={loadMore}>LOAD MORE</button>
        {posts?.map((posts, index) => (

                        <div className="postcard">
    
                                
                                Name :{posts?.name}<br></br>
                                Time :{posts?.time}<br></br>
                                Posts :{posts?.post}
      
                        </div>
                    )

                    )}
        </>
    )}
    


export default Chat;