import { useState, useEffect } from 'react'
import type { Product } from './types/product'
import ProductCard from './components/ProductCard'

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Server returned an error: " + response.status);
      } 
      return response.json()
    })
    .then((data: Product[]) => {
      setProducts(data);
      setIsLoading(false);
    }) 
    .catch((err: Error) => {
      setError(err.message);
      setIsLoading(false);
    })
  }, [])

  const categories: string[] = ["all", ...new Set(products.map(p => p.category))];

  const filteredProducts = selectedCategory === "all" ? products : products.filter((product) => product.category === selectedCategory)

  // CASE 1: Still waiting for the API response
  // if (isLoading) {
  //   return (
  //     <div style={{ padding: "40px", fontFamily: "Arial" }}>
  //       <p>Loading products...</p>
  //     </div>
  //   );
  // }
    if (isLoading) {
      return (
        <div style={{ padding: "24px" }}>
          <h1>Product Store</h1>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginTop: "24px" }}>
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} style={{
              width: "220px", height: "320px",
              backgroundColor: "#E2E8F0",
              borderRadius: "8px",
              }} />
            ))}
          </div>
        </div>
      );
    }


  // CASE 2: An error happened during the fetch
  if (error !== null) {
    return (
      <div style={{ padding: "40px", fontFamily: "Arial", color: "red" }}>
        <p>Something went wrong: {error}</p>
        <p>Check your internet connection and refresh the page.</p>
      </div>
    );
  }

  //CASE 3: Data loaded successfully — show the products
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "24px" }}>
    {/* Page heading */}
      <h1 style={{ marginBottom: "8px" }}>Product Store</h1>
      <p style={{ color: "#64748B", marginBottom: "24px", textAlign: 'center' }}>
        Showing {filteredProducts.length} of {products.length} products.
      </p>

      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="category-select" style={{ marginRight: "10px" }}>Filter by:</label>
        <select id="category-select" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>

    {/* Product grid — flexbox wrapping */}
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "25px",
    }}>
      {/* Loop through every product and create a ProductCard for each */}
      {filteredProducts.map((product: Product) => (
        <ProductCard key={product.id} // React needs a unique key for each item 
        product={product} // pass the product as a prop to ProductCard 
        />
      ))}
    </div>
  </div>
  );
}

export default App
