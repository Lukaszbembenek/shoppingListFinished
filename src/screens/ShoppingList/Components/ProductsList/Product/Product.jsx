import React from 'react';

import styles from './Product.module.css';

const Product = ({ name, price }) => {
  return (
    <div className={styles.box}>
      <span>{name}</span>
      <span>{price}</span>
    </div>
  );
};

export default Product;
