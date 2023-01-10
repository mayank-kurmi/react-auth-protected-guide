import React, { useState, useEffect, useContext } from "react";

import ProductFilter from "./ProductFilter";
import CartContext from "../context/CartContext";
import AllProducts from "./AllProducts";
const Products = () => {
  const { updateCart } = useContext(CartContext);
  const [data, setData] = useState([]);

  const [filter, setFilter] = useState(data);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getProdcuts = async () => {
      const response = await fetch(
        "https://dummyjson.com/products?limit=100&skip=0"
      );

      const data = await response.json();
      setData(data.products);
      setFilter(data.products);
    };
    const getCategories = async () => {
      const response = await fetch("https://dummyjson.com/products/categories");

      const data = await response.json();
      setCategories(data);
    };
    getCategories();
    getProdcuts();
  }, []);

  const filterProduct = (category) => {
    const updateList = data.filter((x) => x.category === category);
    setFilter(updateList);
  };

  /*const handleAddToCart = (product) => {
    console.log(product);
    debugger;
    updateCart(product);
  };*/
  function handleAddToCart(product) {
    //debugger;
    //updateCart(product);
    updateCart({ product: product });
  }
  //
  const handleBuyNow = (product) => {
    console.log(product);
    updateCart(product);
    //debugger;
    // updateCart(product);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="col-md-12 my-3 px-5">
          <div className="position-sticky" style={{ top: "100px" }}>
            <button
              className="btn btn-outline-dark m-1 btn-sm"
              onClick={() => setFilter(data)}
            >
              All
            </button>
            {categories.map((category, index) => {
              return (
                <ProductFilter
                  key={index}
                  title={category}
                  filterProduct={() => {
                    filterProduct(category);
                  }}
                />
              );
            })}
          </div>
        </div>

        <div className="col-md-12 py-md-3 px-5">
          <div className="row">
            {filter.map((product) => {
              return (
                <AllProducts
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  rating={product.rating}
                  stock={product.stock}
                  brand={product.brand}
                  category={product.category}
                  thumbnail={product.thumbnail}
                  handleBuyNow={() => {
                    handleBuyNow(product);
                  }}
                  handleAddToCart={() => {
                    handleAddToCart(product);
                  }}
                />
              );
            })}
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <ShowProducts />
    </>
  );
};

export default Products;
