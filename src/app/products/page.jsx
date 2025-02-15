import ProductClientWrapper from "@/components/ProductClientWrapper"

async function getProducts() {
    const data = await fetch("https://api.daaif.net/products?limit=500&delay=300")
    const products = (await data.json()).products
    return products
}
async function getCategories() {
    const data = await fetch("https://api.daaif.net/products/categories?delay=300")
    const categories = await data.json()
    return categories
}

export default async function ProductPage() {
    const [products, categories] = await  Promise.all([getProducts(), getCategories()])
  return (
    <ProductClientWrapper products={products} categories={categories} />
  )
}