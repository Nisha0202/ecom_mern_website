import React from 'react';
import { Link,  } from 'react-router-dom';
import {  Nav } from 'react-bootstrap';
import jwt_decode from "jwt-decode";


const authToken = localStorage.getItem("authToken");
let isAdmin = false;

if (authToken) {
  const decodedToken = jwt_decode(authToken);
  isAdmin = decodedToken.user.isAdmin;
  console.log(isAdmin);
  console.log("uff");
}


export default function Notloggednav() {
  return (
<div className="row d-flex align-items-center justify-content-center">
<div className="col-sm-12 col-md-4 flex-wrap text-nowrap">
<Nav.Item>
  <Nav.Link className="nav-link fs-6 text-success" as={Link} to="/login">
    Log In
  </Nav.Link>
</Nav.Item>
</div>
<div className="col-sm-12 col-md-4 flex-wrap text-nowrap">
<Nav.Item>
  <Nav.Link className="nav-link fs-6 text-success" as={Link} to="/signup">
    Sign Up
  </Nav.Link>
</Nav.Item>
</div>
<div className="col-sm-12 col-md-4 flex-wrap text-nowrap">
<Nav.Item>
  <Nav.Link className="nav-link fs-6 fw-normal bg-dark" as={Link} to="/login" style={{ color: ' rgb(206, 115, 66)' }}>
    Order Now
  </Nav.Link>
</Nav.Item>
</div>
</div>

  )
}
