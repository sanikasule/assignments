import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

function ProductList({ onViewDetails }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');

    //fetch categories
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.error('Error:', err));
    }, []);

    //fetch products
    useEffect(() => {
        setLoading(true);
        setError(null);

        const url = selectedCategory === 'all'
            ? 'https://fakestoreapi.com/products'
            : `https://fakestoreapi.com/products/category/${selectedCategory}`;

        fetch(url)
            .then(res => {
                if (!res.ok) throw new Error('Failed to fetch');
                return res.json();
            })
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, [selectedCategory]);

    if (loading) {
        return (
            <div style={{ padding: '40px', textAlign: 'center' }}>
                <h2>Loading Products...</h2>
            </div>
        )
    }

    if (error) {
        return (
            <div style={{ padding: '40px', textAlign: 'center', color: 'red' }}>
                <h2>Error: {error}</h2>
            </div>
        )
    }

    return (
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
            <h1>Product Store</h1>

            {/* category buttons */}
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>

                <button onClick={() => setSelectedCategory('all')} style={{ padding: '10px 20px', background: selectedCategory === 'all' ? '#0066cc' : 'white', color: selectedCategory === 'all' ? 'white' : '#0066cc', border: '2px solid #0066cc', borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold' }}>
                    All Products
                </button>

                {categories.map(cat => (
                    <button key={cat} onClick={() => setSelectedCategory(cat)} style={{ padding: '10px 20px', background: selectedCategory === cat ? '#0066cc' : 'white', color: selectedCategory === cat ? 'white' : '#0066cc', border: '2px solid #0066cc', borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold', textTransform: 'capitalize' }}>
                        {cat}
                    </button>
                ))}
            </div>

            {/* product grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px' }}>
                {products.map(product => (
                    <ProductCard key={product.id} product={product} onViewDetails={onViewDetails} />
                ))}
            </div>
        </div>
    )
}
export default ProductList