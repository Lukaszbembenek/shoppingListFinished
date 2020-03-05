import React from 'react';

import styles from './ProductsSum.module.css';

const ProductsSum = ({ productsPrice }) => {
  return (
    !!productsPrice && <div className={styles.sum}>Sum: {productsPrice}</div>
  );
};

export default ProductsSum;
