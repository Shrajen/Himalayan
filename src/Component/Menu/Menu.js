import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, Modal, Row, Table } from "react-bootstrap";
import { GrAddCircle } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import "./Menu.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const myStorage = window.localStorage;
export default function Menu() {
  const [categories, setCategories] = useState([]);
  const [menus, setMenus] = useState([]);
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState();
  const [cartTotal, setCartTotal] = useState(0);
  const [orderId, setOrderId] = useState();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const [num, setNum] = useState(1);
  const incNum = () => {
    if (num < 100) {
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

    const order = myStorage.getItem("order_id");

    axios
      .get("orders/get-order-item/" + order, config)
      // .get("orders/get-order-item", config)
      .then(function(response) {
        setCart(response.data);
      })
      .catch(function(error) {
        console.error(error);
      });

    axios
      .get("orders/get-order-item", config)
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
    // if (orderId === null && orderId === undefined) {
    axios
      .get("orders/get-order-id")
      .then(function(response) {
        setOrderId(response.data);
        JSON.parse(myStorage.setItem("orderId", orderId));
      })
      .catch(function(error) {
        console.error(error);
      });
    // } else {
    //   setOrderId(myStorage.getItem("orderId"));
    // }

    const order_id = myStorage.getItem("orderId");
    console.log(order_id);

    const orders = {
      order_id: order_id,
      menu_id: item.id,
      quantity: num,
    };

    axios
      .post("orders/add-order-item", orders, config)
      .then(function(response) {
        setCart(response.data);
        console.log(cart);
      })
      .catch(function(error) {
        console.error(error);
      });
  };

  const removeFromCart = (item) => {
    const order_id = myStorage.getItem("orderId");
    const item_id = item.id;
    axios
      .get("orders/" + order_id + "/remove-order-item/" + item_id)
      .then(function(response) {
        setCart(response.data);
      })
      .catch(function(error) {
        console.error(error);
      });
  };

  // const removeFromCart = (item) => {
  //   let hardCopy = [...cart];
  //   hardCopy = hardCopy.filter((cartItem) => cartItem.id !== item.id);
  //   setCart(hardCopy);
  // };

  const cartItems =
    cart.length > 0 &&
    cart.map((item, i) => (
      <>
        <tbody>
          <tr key={item.id}>
            <td>{i + 1}</td>

            <td>{item.name}</td>
            <td>
              {item.price}
              <AiFillDelete
                className="icon"
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

  const [input, setInput] = useState({
    first: "",
    last: "",
    email: "",
    address: "",
    action: "",
    date: "",
    city: "",
    contact: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    // validateInput(e);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("user");
    const order_id = myStorage.getItem("orderId");
    axios
      .post(
        "orders/confirm-order",
        {
          first_name: input.first,
          last_name: input.last,
          email: input.email,
          address: input.address,
          status: input.action,
          order_date: input.date,
          city: input.city,
          tel_number: input.contact,
          cost: { cartTotal },
          order_id: order_id,
        },
        config
      )
      .then(function(response) {
        navigate("/");
        myStorage.removeItem("order_id");
        window.location.reload();
        setMessage(response.data);
        console.log(response.data);
      })
      .catch(function(error) {
        console.error(error);
      });
  };

  const msgDiv = message ? (
    <div className="msg">
      <span className="error-text">{message}</span>
    </div>
  ) : (
    ""
  );
  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-12 col-lg-2 ">
            {/* <aside className="sidebar col-lg-3 ml-auto">
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
            </aside> */}
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
                      <th>S.N</th>
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
                    <div className="cart-total">Total: {cartTotal}</div>
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

        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-12 mb-3">
                <label for="name">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="first"
                  placeholder="Full Name"
                  name="first"
                  value={input.first}
                  onChange={onInputChange}
                />
              </div>
              <div className="col-12 mb-3">
                <label for="name">Last Name</label>
                <input
                  type="text"
                  onChange={onInputChange}
                  className="form-control"
                  id="last"
                  name="last"
                  placeholder="Last Name"
                  value={input.last}
                />
              </div>

              <div className="col-12 mb-3">
                <label for="number">Number</label>
                <input
                  type="number"
                  onChange={onInputChange}
                  className="form-control"
                  id="contact"
                  name="contact"
                  placeholder="Number"
                  value={input.contact}
                />
              </div>

              {/* <div className="col-12 mb-3">
                <label for="cost">Cost</label>
                <input
                  type="number"
                  className="form-control"
                  id="cost"
                  name="cost"
                  value={input.cost}
                  onChange={onInputChange}
                  placeholder="Cost"
                />
              </div> */}

              <div className="col-12 mb-3">
                <label for="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={input.email}
                  onChange={onInputChange}
                  placeholder="Email"
                />
              </div>
              <div className="col-12 mb-3">
                <label for="City">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  value={input.city}
                  onChange={onInputChange}
                  placeholder="City"
                />
              </div>
              <div className="col-12 mb-3">
                <label for="address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  onChange={onInputChange}
                  value={input.address}
                  placeholder="Address"
                />
              </div>
              <div className="col-12 mb-3">
                <label for="Status">Status</label>
                <input
                  type="text"
                  className="form-control"
                  id="status"
                  name="action"
                  value={input.action}
                  onChange={onInputChange}
                  placeholder="Status"
                />
              </div>
              <div className="col-12 mb-3">
                <label for="date">Date</label>
                <input
                  type="datetime-local"
                  id="date"
                  name="date"
                  placeholder="Date"
                  onChange={onInputChange}
                  value={input.date}
                  className="form-control"
                />
              </div>
              {msgDiv}

              <div className="">
                <Button
                  className="m-auto d-block "
                  variant="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </div>
          </Form>
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
