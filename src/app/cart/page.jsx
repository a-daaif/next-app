'use client'
import { useCart } from "@/contexts/CartContext"

export default function CartPage() {
    const {cart, addToCart} = useCart()
  return (
    <pre>{JSON.stringify(cart, null, 2)}</pre>
  )
}