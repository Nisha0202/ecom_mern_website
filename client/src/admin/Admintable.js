import { useState, useEffect } from 'react';
import { Container, Table, Card } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import Navber from '../components/Navbar';


export default function Admintable() {

  const [ordersData, setOrdersData] = useState([]);
  const [delivered, setDelivered] = useState({});

  const fetchOrdersData = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/getadmintable');
      if (!response.ok) {
        throw new Error('Error fetching data');
      }
      const data = await response.json();
      setOrdersData(data.data);
      console.log(data.data)
      const status = data.data.deliveryStatus;
      console.log(status);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelivered = async (orderNo) => {
    try {
      const response = await fetch("http://localhost:4000/api/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ orderNo }),
      });
      if (response.ok) {
        setDelivered({ ...delivered, [orderNo]: true });
        fetchOrdersData();
        console.log("success");
      }
    } catch (error) {
      // handle error updating delivery status
    }
  };


  useEffect(() => {
    fetchOrdersData();
  }, []);


  return (
    <div>
      <div> <Navber /> </div>
      <Container className="container-fluid d-flex justify-content-center align-items-center" style={{ paddingTop: '5rem' }} >
        <Card className="m-0">
          <Card.Header>All Odrers</Card.Header> <Card.Body>
            <Table responsive>
              <thead>
                <tr>
                  <th>Order No.</th>
                  <th>Email</th>
                  <th>Price</th>
                  <th>Date</th>
                  <th>Delivery Status</th>
                  <th>Actions</th>
                </tr>   </thead>
              <tbody>
  {ordersData.map((order, index) => (
    <tr key={order.orderNo + index}>
      <td>{order.orderNo}</td>
      <td>{order.email}</td>
      <td>{order.totalprice}tk</td>
      <td>  {new Date(order.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}</td>
      
        <td>
  {order.deliveryStatus}
  {order.deliveryStatus ? <span>delivered</span> : <span>not delivered</span>}</td>

       <td> <Button onClick={() =>  handleDelivered(order.orderNo, order.deliveryStatus)}>
          Delivered
        </Button>

        
      </td> 
    </tr>
  ))}
</tbody>

            </Table>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}