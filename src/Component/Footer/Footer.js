import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <section className="footer">
        <hr></hr>
        <div className="box-container">
          <div className="box">
            <h3>locations</h3>
            <Link to="/">
              <strong>Inglewood</strong>
              <br />
              840 Beaufort Street Inglewood
            </Link>
            <Link to="/">
              <strong>Victoria Park</strong>
              <br />
              419 Albany Highway Victoria Park{" "}
            </Link>
            <Link to="/">
              <strong>Mosman Park</strong>
              <br />
              1/634 Stirling Highway Mosman Park
            </Link>
          </div>

          <div className="box">
            <h3>quick links</h3>
            <Link to="#">home</Link>
            <Link to="#">dishes</Link>
            <Link to="#">about</Link>
            <Link to="#">menu</Link>
            <Link to="#">reivew</Link>
            <Link to="#">order</Link>
          </div>

          <div className="box">
            <h3>contact info</h3>
            <Link to="#">
              +61 8 6161 9509<br></br>
              Inglewood
            </Link>
            <Link to="#">
              +61 8 6161 8645<br></br>
              Victoria Park
            </Link>
            <Link to="#">
              +61 8 6161 2290 <br></br>Mosman Park
            </Link>
          </div>

          <div className="box">
            <h3>follow us</h3>
            <Link to="#">facebook</Link>
            <Link to="#">twitter</Link>
            <Link to="#">instagram</Link>
            <Link to="#">linkedin</Link>
          </div>
        </div>

        <div className="credit">
          {" "}
          copyright @ 2021 <span></span>{" "}
        </div>
      </section>
    </div>
  );
}
