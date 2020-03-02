import React from 'react'
import Product from '../Product/Product'

const ProductsList = ({products}) => {
    return <ul>
        {products.map(({id, ...product}) => <Product key={id} {...product}/>)}
    </ul>
}

export default ProductsList
