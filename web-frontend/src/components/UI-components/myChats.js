import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseurl } from '../../core';
import { GlobalContext } from '../../context/Context';
import { useContext } from 'react';
import { Link } from 'react-router-dom';



export const MyChats = () => {
    let { state, dispatch } = useContext(GlobalContext);
    const email = state?.user?.email
    const [posts, setPosts] = useState([])
    
    // for (let i = 0; i < posts.length; i++) {
    //     var c=0
    //     for (let j = 0; j < posts.length; j++) {

    //         if (posts[i].email == posts[j].email) {
    //             c+=1
    //             if(c==2){
    //                 posts.splice(j,1)
    //             }
    //         }
    //     }
    // }
    console.log(posts)

    useEffect(() => {

        axios.get(`${baseurl}/api/v1/post/${email}/?page=0`,

            {
                withCredentials: true
            })
            .then(response => {
                // console.log("asad", response.data)
                setPosts(response.data)
            })
            .catch(err => alert("Error in getting data"))
    }, [])
    return (
        <div>
            {posts?.map((posts, index) => (

                <Link to={`/specificChat/${posts?.email}`}>


                    {posts?.name}<br></br>


                </Link>
            )

            )}
        </div>
    );
};
