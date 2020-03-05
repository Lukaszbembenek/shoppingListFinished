import React, { useState } from 'react';

import ProductsList from './Components/ProductsList/ProductsList';
import { getShoppingList } from '../../services/shoppingList';

import styles from './ShoppingList.module.css';
import ProductsSum from './Components/ProductsSum/ProductsSum';

const ShoppingList = () => {
  const [products, setProducts] = useState([]);
  const handleLoadingData = () => {
    getShoppingList().then(products => {
      setProducts(products);
    });
  };
  const productsPrice = products.reduce(
    (sum, product) => sum + product.price,
    0
  );
  return (
    <div className={styles.container}>
      <div className={styles.products}>
        <ProductsList products={products} />
        <button onClick={handleLoadingData} className={styles.button}>
          Load data
        </button>
      </div>
      <div className={styles.productsPrice}>
        <ProductsSum productsPrice={productsPrice} />
      </div>
    </div>
  );
};

export default ShoppingList;
