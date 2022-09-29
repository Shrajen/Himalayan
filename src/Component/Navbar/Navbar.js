import React from "react";

import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import AddForm from "../AddForm/AddForm";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg  navbar-light bg-light ">
        <Link className="navbar-brand" to="/">
          <img
            src="logo1.png"
            className="d-inline-block align-top"
            alt=""
            id="navbar_img"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link className="nav-link " to="ContactPage.html">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="ContactPage.html">
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/">
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Contact
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link " id="nav_7" to="/order-page"></Link>
              <Link className="nav-link " id="nav_7" to="/menu1">
                Order Now
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Booking
              </Link>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link className="dropdown-item" onClick={handleShow}>
                  Book Table
                </Link>

                <Link className="dropdown-item" to="#">
                  Book Events
                </Link>
                <Link className="dropdown-item" to="#">
                  Book Catering
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <Modal
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton={true}>
          <Modal.Title>
            <h1>Book your Table</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
