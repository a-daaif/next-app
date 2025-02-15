'use client'
import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"

export default function ProductClientWrapper({ products, categories }) {
    const [filteredProduct, setFilteredProducts] = useState(products)
    const [query, setQuery] = useState('')
    const [category, setCategory] = useState('')
    const [priceRange, setPriceRange] = useState('')

    useEffect(()=>{
        let filtered = products
        if(query) {
            filtered = filtered.filter(p => 
                p.title?.toLowerCase().includes(query) ||
                p.description?.toLowerCase().includes(query))
        }
        if(category) {
            filtered = filtered.filter(p => p.category === category)
        }
        if(priceRange) {
            const [min, max] = priceRange.split('-').map(Number)
            if(priceRange === '1000+') {
                filtered = filtered.filter(p => p.price > 1000)
            } else {
                filtered = filtered.filter(p => p.price >= min && p.price <= max)
            }
        }

        setFilteredProducts(filtered)
    }, [query, category, priceRange])
   
    
    return (
        <div className="row g-2">
            <div className="col-3">
                <h3 className="text-center bg-dark text-info p-3">Filter</h3>
                <input type="text" className="form-control mb-3 shadow" 
                onChange={e => setQuery(e.target.value)}
                placeholder="Search" value={query}/>

                <select  className="form-select mt-3" value={category}
                onChange={e => setCategory(e.target.value)}
                >
                    <option value="">All Categories</option>
                    {categories.map(c => <option key={c.slug} value={c.slug}>{c.name}</option>)}
                </select>

                <select  className="form-select mt-3" value={priceRange}
                onChange={e => setPriceRange(e.target.value)}
                >
                    <option value="">All Prices</option>
                    <option value="0-100">0 - 100 $</option>
                    <option value="101-300">101 - 300 $</option>
                    <option value="301-600">301 - 600 $</option>
                    <option value="601-1000">601 - 1000 $</option>
                    <option value="1000+">1000+ $ $</option>
                </select>
            </div>
            <div className="col-9">
               <div className="row g-3">
               {filteredProduct.map(p => <ProductCard key={p.id} product={p} />)}
               </div>
            </div>
        </div>
    )
}