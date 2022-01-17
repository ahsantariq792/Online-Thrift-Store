import '../../App.css';
import React, { useEffect, useState } from 'react';

import aboutloan from "../../images/about-loan.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

function Aboutus() {

    return (
        <>

            <div class="about-main">
                <div class="about-container">
                    <div class="content-section">
                        <div class="title">
                            <h1>About Us</h1>
                        </div>
                        <div class="about-text">
                            <h2>Thrift Store</h2>
                            <p>Thrift store is a trusted community marketplace for people to list, discover and then buy/sell online
                                around the country. Whether it is an appartment or a car, Thrift store connects people to unqiue experiences at any
                                price point and with the world class customer service and a growing community of users. Thrift Store is the easiest
                                way for people to buy/sell for their financial services and addressing the underlying barriers to financial access</p>
                            <div class="about-button">
                                <a>Read More</a>
                            </div>
                        </div>
                        <div class="social">
                            <span>
                                <FontAwesomeIcon icon={faFacebook} />

                            </span>
                            <span>
                                <FontAwesomeIcon icon={faTwitter} />
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faInstagram} />
                            </span>

                        </div>
                    </div>
                    <div class="about-image-section">
                        <img src={aboutloan} />
                    </div>
                </div>
            </div>

        </>
    );
}

export default Aboutus;