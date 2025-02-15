'use client'
const { createContext, useState, useContext } = require("react");

const CartContext = createContext()


export function CartProvider({children}) {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    const addToCart = (product) => {
        console.log('Adding to cart ', product)
        const index = cart.findIndex(item => item.id === product.id)
        if(index > -1) {
            cart[index].quantity +=  1
            setCart([...cart])
        } else {
            setCart([...cart, {...product, quantity: 1}])
        }
    }

    const getQuantity = (productId) => {
        return cart.find(item => item.id === productId)?.quantity || 0
    }

    const removeFromCart = (productId) => {
        console.log('Removing from cart ', productId)
    }
    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, total, getQuantity}} >
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}