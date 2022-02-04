import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import axios from 'axios';
import { baseurl } from '../../core';
import { GlobalContext } from '../../context/Context';
import { useContext, useState, useEffect } from "react";

function DashNavbar() {

    let { state, dispatch } = useContext(GlobalContext);


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

    const logout = () => {
        axios.post(`${baseurl}/api/v1/logout`, {}, {
            withCredentials: true
        })
            .then((res) => {
                console.log("res +++: ", res.data);
                dispatch({
                    type: "USER_LOGOUT"
                })
            })

    }



    return (
        <>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand className="nav-main">TS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <li>
                                <Link to="/" className="nav-itms">Profile</Link>
                            </li>


                            <li>
                                <Link to="/dashboard" className="nav-itms">Dashboard</Link>
                            </li>

                            <li>
                                <Link to="/carform" className="nav-itms">Sell Car</Link>
                            </li>

                            <li>
                                <Link to="/aboutus" className="nav-itms">About US</Link>
                            </li>

                            <li>
                                <Link to="/contactus" className="nav-itms">Contact US</Link>
                            </li>

                            <li>
                                <Link to="/faq" className="nav-itms">FAQ</Link>
                            </li>
                            <li>
                                <Link to="/mychats" className="nav-itms">Inbox</Link>
                            </li>

                            <li>
                                <Link to="/my-qrcode" className="nav-itms">My Applications</Link>
                            </li>


                            {/* <li>
                                <Link to="/" onClick={logout} className="nav-itms" style={{ color: "red" }}>Logout</Link>
                            </li> */}

                            <li>
                                <NavDropdown title= {<img height={30} width={30} src="https://icon-library.com/images/profile-icon-white/profile-icon-white-1.jpg" />} id="dropdown">
                                    <NavDropdown.Item style={{textAlign: "center"}}>{profile?.name}</NavDropdown.Item>
                                    <NavDropdown.Item style={{textAlign: "center"}}>{profile?.email}</NavDropdown.Item>
                                    <NavDropdown.Item style={{textAlign: "center"}}>{profile?.phone}</NavDropdown.Item>
                                    <NavDropdown.Divider style={{width: "100%"}} />
                                        <Link to="/" onClick={logout} className="nav-itms" style={{ color: "red" }}>Logout</Link>
                                </NavDropdown>

                            </li> 


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default DashNavbar;