import React, { useEffect, useState } from "react";
import CategorySelector from "./CategorySelector";
import useApiFetcher from "../../../hooks/useApiFetcher";
import { getFullUrlLocal, API_URL } from "../../../assets/constants/apiUrls";

const Products = () => {
  const [category, setCategory] = useState("Residential");
  const [products, setProducts] = useState([]);

  const fetchProducts = async (category) => {
    const url = getFullUrlLocal(`${API_URL.PRODUCTS}?filters[category][name][$eq]=${category}`);
    const [data, error] = await useApiFetcher(url);
    if (!error) {
      setProducts(data);
    }
  };

  useEffect(() => {
    fetchProducts(category);
  }, [category]);

  return (
    <div>
      <CategorySelector onCategoryChange={setCategory} />
      <div>
        {products.map((product) => (
          <div key={product.id}>{product.attributes.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Products;
