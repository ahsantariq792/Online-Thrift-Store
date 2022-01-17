import '../../App.css';
import React from 'react';
import { Link } from 'react-router-dom';



function Help() {

    return (
        <>
            <div class="help-heading ">
                <h1>FAQs</h1>
            </div>
            <div class="row help-row justify-content-center ">
                <div class="container-sm">
                    <div class="column-md">

                        <Link to="/safety" className="faq-a">
                            {/* <a className="faq-a" href="Safety.html"> */}
                            <div class="content-box help-content">
                                <h3 class="help-h3">Safety</h3>
                                <p class="help-para"> All safety measures for our valuable customers' convenience, are to be found here</p>
                            </div>
                            {/* </a> */}

                        </Link>
                    </div>

                    <div class="column-md">
                        <Link to="/legal" className="faq-a">

                            {/* <a className="faq-a" href="Legal and Privacy Information.html"> */}
                                <div class="content-box help-content">
                                    <h3 class="help-h3">Legal & Privacy information</h3>
                                    <p class="help-para"> There is some Legel & Privacy information for our valued customers' ease</p>
                                </div>
                            {/* </a> */}
                        </Link>
                    </div>

                    <div class="column-md">
                        <Link to="/profilehelp" className="faq-a">

                            {/* <a className="faq-a" href="Profile.html"> */}
                                <div class="content-box help-content">
                                    <h3 class="help-h3">My Account/Profile</h3>
                                    <p class="help-para">It includes all the important information about Account & Profile creation and modification</p>
                                </div>
                            {/* </a> */}
                        </Link>
                    </div>
                </div>
            </div>

            <div class="row help-row justify-content-center">

                <div class="column-md">
                    <Link to="/posting" className="faq-a">

                        {/* <a className="faq-a" href="Posting&Managing.html"> */}
                            <div class="content-box help-content">
                                <h3 class="help-h3">Posting & Managing Ads</h3>
                                <p class="help-para">This may help our valued customers as far as posting and managin ads</p>
                            </div>
                        {/* </a> */}
                    </Link>
                </div>
            </div>
        </>



    )
}

export default Help;