import React from 'react'

const Product = ({name, price}) => {
    return <li>
        <span>{name}</span>
        <span>{price}</span>
    </li>
}

export default Product
