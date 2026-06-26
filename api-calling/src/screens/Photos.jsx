import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Photos() {
  const [products, setProducts] = useState([]);
  const [store, setStore] = useState([]);
  const [Search, setSearch] = useState("");

  const handleFetchPhotos = async () => {
    const res = await axios.get("https://dummyjson.com/products");
    setProducts(res.data.products);
    setStore(res.data.products);
  };

  const getSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    setProducts(
      products.filter(
        (product, i) =>
          product.title.toLowerCase().includes(Search.toLowerCase()) ||
          product.category.toLowerCase().includes(Search.toLowerCase()),
      ),
    );
  };

  const handleCategoryFilter = (e) => {
    setProducts(store);
    if (e.target.value == "all") {
      setProducts(store);
    } else {
      setProducts(
       store.filter((product) => product.category == e.target.value),
      );
    }
  };

  const handlePriceFilter = (e) => {
    console.log(e.target.value);
    setProducts(
      store.filter((product) => product.price >= Number(e.target.value)),
    );
  };

  useEffect(() => {
    handleFetchPhotos();
  }, []);
  return (
    <>
      <div>
        <input onChange={getSearch} type="text" />{" "}
        <button onClick={handleSearch} className="m-2 btn btn-primary">
          Search
        </button>
        <select className="fw-bold" onChange={handleCategoryFilter}>
          <option value={"all"}>All</option>
          <option value={"beauty"}>Beauty</option>
          <option value={"fragrances"}>Fragrances</option>
          <option value={"furniture"}>Furniture</option>
          <option value={"groceries"}>Groceries</option>
        </select>
        <span className="fw-bold fs-5 m-2">Price</span>
        <input
          className="m-1"
          onChange={handlePriceFilter}
          type="range"
          min={1}
          max={2500}
        />
        <button onClick={handleSearch} className="m-2 btn btn-primary">
          {" "}
          Clear Filter
        </button>
      </div>
      <div className="container row justify-content-evenly">
        {products.map((products, i) => {
          return (
            <div key={i} className="card" style={{ width: "18rem" }}>
              <img
                src={products.images[0]}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{products.title}</h5>
                <p className="card-text"> $ {products.price}</p>
                <p className="card-text">Category : {products.category}</p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
