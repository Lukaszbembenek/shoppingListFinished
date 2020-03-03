import React, { useState } from 'react';

import ProductsList from './Components/ProductsList/ProductsList';
import { getShoppingList } from '../../services/shoppingList';

import styles from './ShoppingList.module.css';

const ShoppingList = () => {
  const [products, setProducts] = useState([]);
  const handleLoadingData = () => {
    getShoppingList().then(products => {
      setProducts(products);
    });
  };
  return (
    <div className={styles.container}>
      <ProductsList products={products} />
      <button onClick={handleLoadingData}>Load data</button>
    </div>
  );
};

export default ShoppingList;
