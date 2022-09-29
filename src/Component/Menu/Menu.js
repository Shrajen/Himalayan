import React, { useEffect, useState } from "react";
import { Button, Card, Col, Modal, Row, Table } from "react-bootstrap";
import { GrAddCircle } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import "./Menu.css";
import axios from "axios";

export default function Menu() {
  const [categories, setCategories] = useState([]);
  const [menus, setMenus] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const [num, setNum] = useState(0);
  const incNum = () => {
    if (num < 10) {
      setNum(Number(num) + 1);
    }
  };
  const decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };
  const handleChange = (e) => {
    setNum(e.target.value);
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json, text-plain, */*",
      "X-Requested-With": "XMLHttpRequest",
    },
  };

  useEffect(() => {
    axios
      .get("categories")
      .then(function(response) {
        setCategories(response.data);
      })
      .catch(function(error) {
        console.error(error);
      });
  });

  useEffect(() => {
    axios
      .get("menus")
      .then(function(response) {
        setMenus(response.data);
      })
      .catch(function(error) {
        console.error(error);
      });

    axios
      .get("orders/get-order-item")
      .then(function(response) {
        setCart(response.data);
      })
      .catch(function(error) {
        console.error(error);
      });
  });

  useEffect(() => {
    total();
  }, [cart]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    setCartTotal(totalVal);
  };

  const addToCart = (item) => {
    // setCart([...cart, item]);
    const orders = {
      order_id: item.id,
      menu_id: item.id,
      quantity: num,
    };

    axios
      .post("orders/add-order-item", orders, config)
      .then(function(response) {
        setCart(response.data);
      })
      .catch(function(error) {
        console.error(error);
      });
  };

  const removeFromCart = (item) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== item.id);
    setCart(hardCopy);
  };

  const cartItems =
    cart.length > 0 &&
    cart.map((item) => (
      <>
        <tbody>
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>
              {item.price}
              <AiFillDelete
                className="icon "
                onClick={() => removeFromCart(item)}
              />
            </td>
            <td>
              <div className="cart-product-quantity">
                <button onClick={decNum}>-</button>
                <div className="count">
                  <span onChange={handleChange}>{num}</span>
                </div>
                <button onClick={incNum}>+</button>
              </div>
            </td>
          </tr>
        </tbody>
      </>
    ));

  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-12 col-lg-2 ">
            <aside className="sidebar col-lg-3 ml-auto">
              <p className="border-top pt-3 d-block d-lg-none">
                <strong>Category</strong>
              </p>
              <select
                className="subMenuSelect form-control d-block d-lg-none bimesh"
                aria-label="Sidebar page navigation"
              >
                <option value="#">
                  <span>Bagels</span>
                </option>
                <option value="#">
                  <span className="subMenuHighlight">Veg Wrap</span>
                </option>
                <option value="#">
                  <span>Chicken Wrap</span>
                </option>
                <option value="#">
                  <span>Veg Burgers</span>
                </option>
                <option value="#">
                  <span>Chicken Sandwiches(Burgers)</span>
                </option>
                <option value="#">
                  <span>Chicken Wrap</span>
                </option>
                <option value="#">
                  <span>Veg Burgers</span>
                </option>
                <option value="#">
                  <span>Chicken Sandwiches(Burgers)</span>
                </option>
                <option value="#">
                  <span>Chicken Wrap</span>
                </option>
                <option value="#">
                  <span>Veg Burgers</span>
                </option>
                <option value="#">
                  <span>Chicken Sandwiches(Burgers)</span>
                </option>
              </select>
            </aside>
            <div id="subMenu" className="d-none d-lg-block">
              <span>Categories</span>
              <ul className="list-unstyled">
                {categories.map((category, k) => (
                  <li key={k}>{category.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-12 col-lg-6 menu-table">
            <Table responsive>
              <thead>
                <tr>
                  <th>Menus</th>
                  <th>Prices</th>
                </tr>
              </thead>
              <tbody>
                {menus.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>
                      {item.price}
                      <GrAddCircle
                        className="icon p-1"
                        onClick={() => addToCart(item)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <div className="col-md-3 col-lg-4">
            <Card>
              <Card.Title>
                <h2 className="text-center">Your Cart Items</h2>
              </Card.Title>
              <Card.Body>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Food-items</th>
                      <th>Prices</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  {cartItems}
                </Table>
              </Card.Body>

              <Card.Footer>
                <Row>
                  <Col md={6}>
                    <div className="cart-total">Total: ${cartTotal}</div>
                  </Col>
                  <Col md={6}>
                    <Button type="submit" onClick={handleShow}>
                      Order
                    </Button>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleClose} size="md">
        <Modal.Header closeButton>
          <Modal.Title>
            <h4>Add Your Details</h4>
          </Modal.Title>
        </Modal.Header>

        <form role="form">
          <Modal.Body>
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Full Name"
              />
            </div>

            <div class="form-group">
              <label for="number">Number</label>
              <input
                type="number"
                class="form-control"
                id="number"
                placeholder="Number"
              />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Email"
              />
            </div>
            <div class="form-group">
              <label for="City">City</label>
              <input
                type="text"
                class="form-control"
                id="city"
                placeholder="City"
              />
            </div>
            <div class="form-group">
              <label for="address">Address</label>
              <input
                type="text"
                class="form-control"
                id="address"
                placeholder="Address"
              />
            </div>

            <div class="checkbox">
              <label>
                <input type="checkbox" /> Check me out
              </label>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button className="download-btn" onClick={handleClose}>
              Submit
            </Button>

            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
}
