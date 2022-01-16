import '../../../App.css';
import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import Button from "@mui/material/Button";




function Sellerboard() {

    return (
        <>
            <div className="seller-dashboard">
                <h1>Welcome to Seller Dashboard</h1>

                <p>What do you want to sell ?</p>

                <div className="seller-dashboard-buttons">
                    <div>

                        <Link to="/carform">
                            <Button className="sell-btn" variant="contained" color="primary">
                                Sell A Car
                            </Button>
                        </Link>
                    </div>

                    <div>
                        <Link to="/houseform">
                            <Button className="sell-btn" variant="contained" color="primary">
                                Sell A House
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sellerboard;