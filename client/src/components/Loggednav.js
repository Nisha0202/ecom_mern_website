import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import { useState } from 'react';
import { useCart } from './ContextReducer';
import Modal from '../Modal';
import Cart from '../screens/Cart';
import { Cart2 } from 'react-bootstrap-icons';
import jwt_decode from "jwt-decode";

const authToken = localStorage.getItem("authToken");
let isAdmin = false;

if (authToken) {
  const decodedToken = jwt_decode(authToken);
  isAdmin = decodedToken.user.isAdmin;
  console.log(isAdmin);
  console.log("uff");
}
export default function Loggednav() {
    let data = useCart();
  const navigate = useNavigate();
  const [cartView, setCartView] = useState(false)

    const handelelogout = () => {
        console.log("why");
        localStorage.removeItem("authToken");
        navigate("/login")
      }
  return (

<div className="row d-flex align-items-center justify-content-center">
    <div className="col-sm-12 col-md-4 flex-wrap text-nowrap">
             <Nav.Item>
               <Nav.Link
                 className="nav-link fs-6 fw-normal bg-dark"
                 as={Link}
                 to="/myorders"
               >
                 My Orders
               </Nav.Link>
             </Nav.Item>
           </div>
 
           <div className="col-sm-12 col-md-4 flex-wrap text-nowrap"
             onClick={() => setCartView(true)} >
             <Nav.Item>
               <Nav.Link
                 className="nav-link  fs-6 fw-normal bg-dark"
                 as={Link}to=""
                 style={{ color: " rgb(206, 115, 66)" }} >{" "}
                 <Cart2 className="" size={24} color="orange" />{" "}
                 <Badge pil={"success "}>{data.length}</Badge>
               </Nav.Link>
             </Nav.Item>
           </div>
           {cartView ? (
             <Modal onClose={() => setCartView(false)}>
               <Cart></Cart>
             </Modal>
           ) : ( ""
             )}
          <div className="col-sm-12 col-md-4 flex-wrap text-nowrap">
               <Nav.Item>
                 <Nav.Link
                   className="nav-link fs-6 text-danger"
                   as={Link}
                   to="/"
                   onClick={handelelogout}
                 >
                   Log Out
                 </Nav.Link>
               </Nav.Item>
             </div>
           </div>

  )
}
