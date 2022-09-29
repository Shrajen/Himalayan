import React, { useEffect, useState } from "react";
import { Card, Table } from "react-bootstrap";
import Cart from "../Cart/Cart";
import { GrAddCircle } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import "./Menu.css";

export default function Menu() {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const items = [
    {
      id: 1,
      name: "Burger",
      price: 20,
    },
    {
      id: 2,
      name: "Pizza",
      price: 32,
    },
    {
      id: 3,
      name: "Deserts",
      price: 51,
    },
  ];

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
    setCart([...cart, item]);
  };

  const removeFromCart = (el) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
    setCart(hardCopy);
  };

  const listItems = items.map((item) => (
    <div key={item.id}>
      {`${item.name}: $${item.price}`}
      <input type="submit" value="add" onClick={() => addToCart(item)} />
    </div>
  ));

  const cartItems = cart.map((item) => (
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
              <button onClick={() => console.log("hi")}>-</button>
              <div className="count">
                <span>t</span>
              </div>
              <button onClick={() => console.log("hiii")}>+</button>
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
                <li>
                  <a className="list-item-1" href="#list-item-2">
                    My Favourites
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-12 col-lg-6 menu-table">
            <Table responsive>
              <thead>
                <tr>
                  <th>Categories</th>
                  <th>Prices</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
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
                      <th>Categories</th>
                      <th>Prices</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  {cartItems}
                </Table>
              </Card.Body>

              <Card.Footer>
                <div className="cart-total">Total: ${cartTotal}</div>
              </Card.Footer>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
