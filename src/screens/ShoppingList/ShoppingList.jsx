import React, { useState } from 'react';

import ProductsList from './Components/ProductsList/ProductsList';
import { getShoppingList } from '../../services/shoppingList';

import styles from './ShoppingList.module.css';
import ProductsSum from "./Components/ProductsSum/ProductsSum"

const ShoppingList = () => {
  const [products, setProducts] = useState([]);
  const handleLoadingData = () => {
    getShoppingList().then(products => {
      setProducts(products);
    });
  };
  const productsPrice = products.reduce((sum, product) => sum + product.price, 0);
  return (
    <div className={styles.container}>
      <ProductsList products={products} />
      <ProductsSum productsPrice={productsPrice}/>
      <button onClick={handleLoadingData}>Load data</button>
    </div>
  );
};

export default ShoppingList;
