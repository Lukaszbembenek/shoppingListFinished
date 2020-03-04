import { adaptProductsList } from "../utils/dataAdapter"

const mockedShoppingList = [{
        name: 'Mleko',
        price: 2.50,
        id: 12
    },
    {
        name: 'Ciastka',
        price: 3.40,
        id: 14
    },
    {
        name: 'Czekolada',
        price: 4.15,
        id: 215,
    },
]

// export const getShoppingList = () => {
//     return new Promise((resolve) => resolve(mockedShoppingList));
// }

export const getShoppingList = () => {
    return fetch('https://workshops-backend.herokuapp.com/shopping-list')
        .then(res => res.json())
        .then(products => adaptProductsList(products))
}
