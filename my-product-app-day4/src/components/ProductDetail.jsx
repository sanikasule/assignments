import { useState, useEffect } from "react";

function ProductDetail({ productId, onBack, onAddToCart, onAddToWishList }) {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Use AbortController to cancel fetch if component unmounts
        const controller = new AbortController();
        
        setLoading(true);
        setError(null);

        fetch(`https://fakestoreapi.com/products/${productId}`, { signal: controller.signal })
            .then(res => {
                if (!res.ok) throw new Error('Product not found');
                return res.json();
            })
            .then(data => {
                setProduct(data);
                setLoading(false);
            })
            .catch(err => {
                if (err.name !== 'AbortError') {
                    setError(err.message);
                    setLoading(false);
                }
            });

        return () => controller.abort();
    }, [productId]);

    // --- GUARD CLAUSES ---
    // These prevent the code from trying to read properties of "null"
    if (loading) {
        return (
            <div style={{ textAlign: 'center', padding: '100px', fontSize: '20px' }}>
                Loading product details...
            </div>
        );
    }

    if (error) {
        return (
            <div style={{ textAlign: 'center', padding: '100px' }}>
                <h2 style={{ color: '#d32f2f' }}>Error</h2>
                <p>{error}</p>
                <button onClick={onBack} style={{ cursor: 'pointer', padding: '10px' }}>Go Back</button>
            </div>
        );
    }

    if (!product) return null;

    // --- HELPER FOR RATINGS ---
    // Safe access using Optional Chaining (?.) and providing defaults
    const rate = product.rating?.rate || 0;
    const count = product.rating?.count || 0;

    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
            {/* Back Button */}
            <button
                onClick={onBack}
                style={{
                    padding: '10px 20px',
                    marginBottom: '20px',
                    background: '#f0f0f0',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '14px'
                }}
            >
                ← Back to Products
            </button>

            {/* Product Details Container */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '40px',
                background: 'white',
                padding: '30px',
                borderRadius: '8px',
                border: '1px solid #ddd',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
                {/* Left: Image */}
                <div style={{ textAlign: 'center' }}>
                    <img
                        src={product.image}
                        alt={product.title}
                        style={{
                            width: '100%',
                            maxHeight: '500px',
                            objectFit: 'contain',
                            border: '1px solid #eee',
                            borderRadius: '8px',
                            padding: '20px'
                        }}
                    />
                </div>

                {/* Right: Details */}
                <div>
                    <h1 style={{ margin: '0 0 10px 0', fontSize: '28px' }}>
                        {product.title}
                    </h1>

                    <p style={{
                        display: 'inline-block',
                        padding: '5px 15px',
                        background: '#f0f0f0',
                        borderRadius: '20px',
                        fontSize: '14px',
                        marginBottom: '20px',
                        textTransform: 'capitalize'
                    }}>
                        {product.category}
                    </p>

                    {/* Rating Section */}
                    <div style={{ marginBottom: '20px' }}>
                        <span style={{ fontSize: '20px', color: '#ff9900' }}>
                            {'★'.repeat(Math.floor(rate))}
                            {'☆'.repeat(5 - Math.floor(rate))}
                        </span>
                        <span style={{ marginLeft: '10px', fontSize: '16px', color: '#666' }}>
                            {rate} ({count} reviews)
                        </span>
                    </div>

                    {/* Price */}
                    <div style={{
                        fontSize: '36px',
                        fontWeight: 'bold',
                        color: '#0066cc',
                        marginBottom: '20px'
                    }}>
                        ${product.price.toFixed(2)}
                    </div>

                    {/* Description */}
                    <div style={{
                        marginBottom: '30px',
                        lineHeight: '1.6',
                        color: '#333'
                    }}>
                        <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>
                            Description
                        </h3>
                        <p>{product.description}</p>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                        onClick={() => onAddToCart(product)}
                        style={{
                            width: '100%',
                            padding: '15px',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            background: '#0066cc',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            transition: 'background 0.3s'
                        }}
                        onMouseOver={(e) => e.target.style.background = '#0052a3'}
                        onMouseOut={(e) => e.target.style.background = '#0066cc'}
                    >
                        🛒 Add to Cart
                    </button>

                    {/* Add to WishList Button */}
                    <button
                        onClick={() => onAddToWishList(product)}
                        style={{
                            marginTop: '15px',
                            width: '100%',
                            padding: '15px',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            background: '#0066cc',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            transition: 'background 0.3s'
                        }}
                        onMouseOver={(e) => e.target.style.background = '#0052a3'}
                        onMouseOut={(e) => e.target.style.background = '#0066cc'}
                    >
                        🛒 Add to WishList
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;