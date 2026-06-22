import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Photos() {
  const [products, setProducts] = useState([]);
  const handleFetchPhotos = async () => {
    const res = await axios.get("https://dummyjson.com/products");
    setProducts(res.data.products);
  };
  return <div>Photos</div>;
}
