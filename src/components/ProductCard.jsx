'use client'

import { useCart } from "@/contexts/CartContext"
import { useState } from "react"

export default function ProductCard({product}) {
    const {addToCart, getQuantity} = useCart()
    const handleClick = (e) => {
        addToCart(product)
    } 
    return (
       <div className="col-md-4">
         <div className="card h-100 shadow-lg" >
            <img src={product.thumbnail} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description.substring(0,50)}...</p>
                    
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                    <span className="fw-bold">{product.price}</span>
                    <button className="btn btn-primary position-relative"
                    onClick={handleClick}
                    ><i className="bi bi-card"></i> Add<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {getQuantity(product.id)}
                    <span class="visually-hidden">unread messages</span>
                  </span></button>
                </div>
        </div>
       </div>
    )
}