import React, { useState } from 'react'
import ProductsList from "./Components/ProductsList/ProdutsList"
import { getShoppingList } from "../../services/shoppingList"

const ShoppingList = () => {
    const [products, setProducts] = useState([])
    const handleLoadingData = () => {
        getShoppingList()
            .then(products => {
                setProducts(products)
            })
    }
    return <div>
        <ProductsList products={products}/>
        <button onClick={handleLoadingData}>Load data</button>
    </div>
}

export default ShoppingList
