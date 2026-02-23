import React, { useState } from "react";
import type { Product } from "../types/product";
import {FaCaretUp, FaCaretDown} from 'react-icons/fa';

interface ProductCardProps {
    product: Product;
}

function ProductCard({ product }: ProductCardProps) {
    const [showDescription, setShowDescription] = useState<boolean>(false);

    const handleToggle = (e: React.MouseEvent) => {
        e.stopPropagation();
        setShowDescription(!showDescription);
    }

    const cardStyle: React.CSSProperties = {
        border: "1px solid #ddd",
        borderRadius: "8px",    
        padding: "16px",
        width: "220px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        backgroundColor: "#fff",
    };

    const toggleStyle: React.CSSProperties = {
        border: "1px solid #000",
        borderRadius: "8px",    
        padding: "8px",
        width: "210px",
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        gap: "8px",
        backgroundColor: "#fff",
    };

    const imgStyle: React.CSSProperties = {
        width: "100%",
        height: '160px',
        objectFit: "contain",
    };

    const titleStyle: React.CSSProperties = {
        fontSize: "14px",
        fontWeight: "bold",
        margin: 0,
        // Only show 2 lines — cut off the rest with ...
        display: "-webkit-box",
        WebkitLineClamp: 2, 
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
    };

    const priceStyle: React.CSSProperties = {
        fontSize: "18px",
        color: "#15803D", // green colour for price
        fontWeight: "bold",
        margin: 0,
    };

    const categoryStyle: React.CSSProperties = {
        fontSize: "12px",
        color: "#64748B", // grey colour for category label
        textTransform: "capitalize",
        margin: 0,
    };

    const ratingStyle: React.CSSProperties = {
        fontSize: "13px",
        color: "#B45309", // amber colour for rating
        margin: 0,
    };

    return (
        <div style={cardStyle}>
            <img src={product.image} alt={product.title} style={imgStyle}/>

            <p style={categoryStyle}>{product.category}</p>

            <p style={titleStyle}>{product.title}</p>

            <p style={priceStyle}>${product.price.toFixed(2)}</p>

            <p style={ratingStyle}>{product.rating.rate} ({product.rating.count} reviews)</p>

            <button style={toggleStyle} onClick={handleToggle}>
                {showDescription ? (
                <span><FaCaretUp /> Hide Description</span>
                ) : (
                <span><FaCaretDown /> Show Description</span>
                )}
            </button>
            {showDescription && (
                <p style={{ marginTop: '8px', fontSize: '15px', color: '#555' }}>
                {product.description}
            </p>
      )}
        </div>
    )
}

export default ProductCard;