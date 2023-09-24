import React, { useState } from 'react';
import axios from 'axios';
import {Card, Container, Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import Navber from '../components/Navbar';
import Swal from 'sweetalert2';

const Addmenu = () => {
    const [catname, setCatname] = useState('');
    const [name, setName] = useState('');
    const [file, setFile] = useState(null);
    const [price1, setPrice1] = useState('');
    const [price2, setPrice2] = useState('');
    const [description, setDescription] = useState('');

    const createPost = async (formData) => {
        try {
          console.log('fuu');
          await axios.post("http://localhost:4000/api/upload", formData,{
            headers: { 
              'Content-Type': 'multipart/form-data' }});
             
                Swal.fire({
                  title: 'Success!',
                  text: 'Signup successful!',
                  icon: 'success',
                  confirmButtonText: 'OK'
                });



        } catch (error) {
            console.log(error);
        }
    };
    const submitImage = async (e) => {
        e.preventDefault();
        const formData = new FormData();
      
        formData.append('catname', catname);
        formData.append('name', name);
        formData.append('image', file);
        formData.append('price1', price1);
        formData.append('price2', price2);
        formData.append('description', description);
        createPost(formData);
     
          console.log(catname);
        
    };
return (

<div className=''>
  <div><Navber/></div>
  <Container className="container-fluid d-flex justify-content-center align-items-center" style={{ paddingTop: '3rem' }} >
<div className='container-fluid '>
  <Card className='m-5 p-5'>
      <Form onSubmit={submitImage}>
        <Form.Group className="mb-3" controlId="catname">
          <Form.Label>Category Name:</Form.Label>
          {/* <Form.Select value={catname} onChange={(e) => setCatname(e.target.value)}> <option value="Veg Burger">Veg Burger</option> <option value="Non-Veg Burger">Non-Veg Burger</option> </Form.Select> */}
          <Form.Control type="text" value={catname} onChange={(e) => setCatname(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="image">
          <Form.Label>Image:</Form.Label>
          <Form.Control type="file" onChange={(e) => setFile(e.target.files[0])} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="medium">
          <Form.Label>Medium:</Form.Label>
          <Form.Control type="text" value={price1} onChange={(e) => setPrice1(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="large">
          <Form.Label>Large:</Form.Label>
          <Form.Control type="text" value={price2} onChange={(e) => setPrice2(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description:</Form.Label>
          <Form.Control type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
      </Card>
      </div>
     </Container>
    </div>

  
     
    
    );
};
export default Addmenu;



