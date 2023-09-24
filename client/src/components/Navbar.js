import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import jwt_decode from "jwt-decode";
import Notloggednav from './Notloggednav';
import Loggednav from './Loggednav';
export default function CustomNavbar() {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  const authToken = localStorage.getItem("authToken");
 useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      const decodedToken = jwt_decode(authToken);
      setIsAdmin(decodedToken.user.isAdmin);
    } else {
      setIsAdmin(false);
    }
  }, [authToken]);
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsAdmin(false);
    navigate("/login")
  }
  return (
    <Navbar fixed="top" bg="dark" variant="dark" expand="lg" className=''>
      <Container fluid>
        <Navbar.Brand className="fs-5 fw-bold d-flex justify-content-center " as={Link} to="/">
          <div className='navbar-brand d-flex align-item-center ls'>
          BURGER BRO
        </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
             {isAdmin ? (
              <div className="row d-flex align-items-center justify-content-center">
                <div className="col-sm-12 col-md-4 flex-wrap text-nowrap">
                  <Nav.Item>
                    <Nav.Link
                      className="nav-link fs-6 fw-normal bg-dark text-danger"
                      as={Link}  to="/admin"  >
                      All orders
                    </Nav.Link>
                  </Nav.Item></div>
                <div className="col-sm-12 col-md-4 flex-wrap text-nowrap">
        <Nav.Item>
          <Nav.Link
            className="nav-link fs-6 fw-normal bg-dark" as={Link} to="/addmenu" >
            +Add Menu
          </Nav.Link>
        </Nav.Item> </div>
                <div className="col-sm-12 col-md-4 flex-wrap text-nowrap">
                  <Nav.Item>
                    <Nav.Link className="nav-link fs-6 text-danger" as={Link}
                      to="/" onClick={handleLogout}  >
                      Log Out
                    </Nav.Link>
                  </Nav.Item>
                </div>
                </div>
            )  
            : authToken ? (
              <div className=''>    <Loggednav/></div>  
              ) : ""} 

            {authToken == null ?
             <div className=''> <Notloggednav />
              </div> : (
                ""
              )}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
