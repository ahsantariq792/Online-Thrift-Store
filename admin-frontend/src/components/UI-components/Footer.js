import "../../App.css";
import React from "react";

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="containerfoot">
                    <div className="row footerrow">
                        <div className="footer-col">
                            <h4>Popular Searches</h4>
                            <ul>
                                <li>Corolla</li>
                                <li>Toyota</li>
                                <li>KIA</li>
                                <li>Honda</li>
                                <li>Panthouse</li>
                                <li>Apartments</li>
                            </ul>
                        </div>
                        {/* <div className="footer-col">
                            <h4>Trend Searches</h4>
                            <ul>
                                <li>Panthouse</li>
                                <li>Apartments</li>
                                <li>Honda</li>
                                <li>Banglows</li>
                                <li>Audi</li>
                            </ul>
                        </div> */}
                    </div>


                    
                </div>
            </div>
        </>
    )
}

export default Footer;