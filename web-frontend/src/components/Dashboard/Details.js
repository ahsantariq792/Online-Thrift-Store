import '../../App.css';
import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


function Details() {
    return(
        <>
        <div class="detail-container py-5 mt-05">
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
                    <img src="./pictures/first.webp" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="./pictures/second.webp" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="./pictures/third.webp" class="d-block w-100" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
                <span class="details-box carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="details-box visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
                <span class="details-box carousel-control-next-icon" aria-hidden="true"></span>
                <span class="details-box visually-hidden">Next</span>
            </button>
        </div>

        {/* <!--------Details---------> */}
        <h1 class="text-center py-5">Details</h1>
        <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Details
                    </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <ul>
                            <li>Price: 75,000,000
                            </li>
                            <li>Furnished: Unfurnished
                            </li>
                            <li>Bedrooms: 5
                            </li>
                            <li>Bathrooms: 7+
                            </li>
                            <li>Area: unitKanal
                            </li>
                            <li>Area: 1
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-details-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Description
                    </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-details-headingTwo"
                    data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <p>1 KANAL BEAUTIFUL HOUSE BRAND NEW UNTOCHED HOUSE AT VERY HOT LOCATION FACING PARK IN DHA
                            PHASE 5</p>
                        <ul>
                            <li>5 Master Bed with attached Baths</li>
                            <li>6 Bathrooms in the Bungalow.</li>
                            <li>2 Beautiful T. V Lounge 1 Drawing & Dinning</li>
                            <li>2 Fotile Company Kitchens</li>
                            <li>2 Servant Quarters</li>
                            <li>4 Big Cars Parking</li>
                            <li>Grohi Sanitary Fittings</li>
                            <li>2 Store Rooms</li>
                            <li>Beautiful Lawn & Terrace</li>
                            <li>Bar B. Q Area in Bungalow</li>
                            <li>Ash Wood Door Almirah</li>
                            <li>Amazing Wallpapers & Entrance Lobby</li>
                            <li>Imported Marbles & Tiles Flooring</li>
                            <li>2 Imported Jacuzzi's and 5 Cabin Showers in baths</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default  Details