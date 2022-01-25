import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SearchAppBar() {
    

    return (
        <>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand className="nav-main">TS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                            <li>
                                <Link to="/signup" className="nav-itms">Signup</Link>
                            </li>


                            <li>
                                <Link to="/adminlogin" className="nav-itms">Login As Admin</Link>
                            </li>


                            <li>
                                <Link to="/" className="nav-itms">Login</Link>
                            </li>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default SearchAppBar;