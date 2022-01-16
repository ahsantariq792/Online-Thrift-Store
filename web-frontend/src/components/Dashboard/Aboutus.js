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
                            <h2>A Short-Term Loan That Brings Long-Term Happiness </h2>
                            <p>We are committed to facilitate the entire loan lifecycle. Many People around the world are unbanked and can't
                                access the financial services they need. So this storeis founded with a mission to expand financial access to help underserved
                                communities. We do this by crowdfunding loans for the underserved, improving the quality and cost of financial services, and addressing
                                the underlying barriers to financial access.</p>
                            <div class="about-button">
                                <a href="">Read More</a>
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