

import React from 'react';

import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import AddForm from '../AddForm/AddForm';
export default function Navbar() {

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className='navigation'>
      <nav className="navbar navbar-expand-lg  navbar-light bg-light " >
          <a className="navbar-brand" href="/" >
              <img src="logo1.png"  className="d-inline-block align-top" alt="" id='navbar_img'/>
          </a> 
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <a className="nav-link " href="ContactPage.html">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="ContactPage.html">About us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/">Gallery</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/">Events</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Contact</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link " id="nav_7" href='/'>Order Now</a>
              </li>
           
             <li className="nav-item dropdown">
                     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           Booking
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" onClick={handleShow}>Book Table</a>

                          <a className="dropdown-item" href="#">Book Events</a>
                          <a className="dropdown-item" href="#">Book Catering</a>
                     </div>
              </li>
          
      </ul>
    </div>
      

</nav>
<Modal show={show} size="lg"
aria-labelledby="contained-modal-title-vcenter"
centered>

<Modal.Header closeButton={true}>
<Modal.Title >
<h1>Book your Table</h1>
</Modal.Title>
</Modal.Header>
<Modal.Body>
<AddForm/>
</Modal.Body>
<Modal.Footer>
<Button variant="secondary" onClick={handleClose} >
        Close 
</Button>
</Modal.Footer>
</Modal>



</div>
    
  )
}
