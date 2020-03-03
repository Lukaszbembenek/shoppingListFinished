import React from 'react';

import Product from './Product/Product';

import styles from './ProductsList.module.css';

const ProductsList = ({ products }) => {
  return (
    <div className={styles.list}>
      {products.map(({ id, ...product }) => (
        <Product key={id} {...product} />
      ))}
    </div>
  );
};

export default ProductsList;
