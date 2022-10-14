import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

const Category = () => {
  const [categories, setCategories] = useState([]);

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
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        {categories.map((category, k) => (
          <ul className="list-unstyled">
            <Button>
              <li key={k}>{category.name}</li>
            </Button>
          </ul>
        ))}
      </div>
    </>
  );
};

export default Category;
