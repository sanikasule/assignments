import { FaHeart, FaCaretUp, FaCaretDown } from "react-icons/fa6";
import { useToggle } from "../hooks/useToggle";

function ProductCard({ product, onViewDetails, onAddToWishList, onRemove, wishList }) {
    const existing = wishList.some((item) => item.id === product.id)
    const [showDescription, setShowDescription] = useToggle(false)

    const toggleHeart = (e, product) => {
      e.stopPropagation();
      if (!existing) {
        onAddToWishList(product)
      } else {
        onRemove(product)
      }
    }
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '15px',
      background: 'white',
      cursor: 'pointer',
      transition: 'transform 0.2s, box-shadow 0.2s'
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.transform = 'translateY(-5px)';
      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
    }}

onClick={() => onViewDetails(product.id)}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'contain',
          marginBottom: '10px'
        }}
      />
      
      <h3 style={{
        fontSize: '14px',
        margin: '0 0 10px 0',
        height: '40px',
        overflow: 'hidden'
      }}>
        {product.title}
      </h3>
      
      <div style={{ marginBottom: '10px' }}>
        <span style={{ color: '#ff9900' }}>
          {'★'.repeat(Math.floor(product.rating.rate))}
        </span>
        <span style={{ marginLeft: '5px', fontSize: '12px', color: '#666' }}>
          ({product.rating.count})
        </span>
      </div>
      
      <div  style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between',}}>
        <p style={{
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#0066cc',
        margin: 0
      }}>
        ${product.price}
      </p>

      <p style={{
        fontSize: '25px',
        fontWeight: 'bold',
        color: '#0066cc',
        margin: 0}}>
          <FaHeart onClick={(e) => toggleHeart(e, product)} style={{color: existing ? 'red' : '#d3d3d3'}}/>
      </p>
      </div>

      <button onClick={(e) => {e.stopPropagation(); setShowDescription();}}
        style={{
        marginTop: '10px',
        padding: '6px 10px',
        borderRadius: '6px',
        border: '1px solid #0066cc',
        background: 'white',
        color: '#0066cc',
        cursor: 'pointer',
        fontSize: '12px'
        }}
      >
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
  );
}

export default ProductCard;
