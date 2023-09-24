import React from 'react'
import { useCart, useDispatchCart } from '../components/ContextReducer';
import { Trash } from 'react-bootstrap-icons';
import { Container, Row, Col, Table, Button, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { useState } from 'react';

const Cart = () => {
  function generateOrderNumber() {
    const date = new Date();
    const uniqueNumber = date.getTime() + Math.floor(Math.random() * 1000000);
    return uniqueNumber;
  }
  
  let data = useCart();
  let dispatch = useDispatchCart();
  // const totalQuantity = data.reduce((acc, food) => acc + food.quantity, 0);
  let totalPrice = data.reduce((total, food) => total + food.price, 0);

  const handleCheckOut = async () => {
    const userEmail = localStorage.getItem("userEmail");
    const response = await fetch("http://localhost:4000/api/orderData", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString()
      })
    });
    if (response.status === 200) {
      dispatch({ type: "DROP" })
      Swal.fire({
        title: 'Success!',
        text: 'Checkout successful!',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    }
  }


  const [isChecked, setIsChecked] = useState(false);
  
  const handleConfirm = async (event) => {
    const orderNumber = generateOrderNumber();
    const userEmail = localStorage.getItem("userEmail");
    setIsChecked(event.target.checked);
  
    const response = await fetch("http://localhost:4000/api/admintable", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        orderNo: orderNumber,
        email: userEmail,
        totalprice: totalPrice,
        date: new Date().toDateString()
       
      })
    });
    if (response.status === 200) {
    console.log("success");
   
    }}

  return (

    <Container className='mt-1 align-item-center'>
      <div>
        {data.length === 0 ? (
          <div className="w-80 text-dark text-center fs-4 mb-4">The Cart is Empty!</div>
        ) : ""}
      </div>

      <div className='container-fluid'>
        <Row>
          <Col xs={12}>
            <Table striped bordered hover variant="dark" responsive>
              <thead>
                <tr className='text-white'>
                  <th scope='col' className="col-1">#</th>
                  <th scope='col' className="col">Name</th>
                  <th scope='col' className="col-2">Quantity</th>
                  <th scope='col' className="col-2">Option</th>
                  <th scope='col' className="col-2">Amount</th>
                  <th scope='col' className="col-2"></th>
                </tr>
              </thead>
              <tbody>
                {data.map((food, index) => (
                  <tr key={index} className='text-white mr-2'>
                    <td className="col-1">{index + 1}</td>
                    <td className="col ">{food.name} </td>
                    <td className="col-2">{food.quantity}</td>
                    <td className="col-2">{food.size}</td>
                    <td className="col-2">{food.price}</td>
                    <td>
                      <Button variant="link" className="p-0 text-danger">
                        <Trash onClick={() => { dispatch({ type: "REMOVE", index: index }) }} />
                      </Button>
                    </td>

                  </tr>
                ))}
              </tbody>
            </Table>

            <>
              <Row className="mt-5 text-black">
                <Col><h5>Total Price: {totalPrice}tk/-</h5></Col>
              </Row>
              <Form.Check    type="checkbox"  label="Confirm Order" className="mt-2 mb-5 fs-6 fw-bold text-danger " onChange={handleConfirm}   />
      <Row><Col>
      <Button onClick={handleCheckOut} disabled={!isChecked}>
            Check out
          </Button>
      </Col></Row>
            </>
          </Col>
        </Row>
      </div>
    </Container>


  );
};

export default Cart;


