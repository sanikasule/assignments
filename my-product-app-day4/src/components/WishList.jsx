import { useWishList } from '../context/WishListContext';
import WishListItem from './WishListItem';

function WishList({ onClose }) {
  const { 
    wishList, 
    removeFromWishList, 
    clearWishList,
    getWishListCount
  } = useWishList();

  if (wishList.length === 0) {
    return (
      <div style={{
        padding: '20px',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px'
        }}>
          <h1>Wish List</h1>
          <button
            onClick={onClose}
            style={{
              padding: '10px 20px',
              background: '#f0f0f0',
              border: '1px solid #ddd',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            ← Back to Shopping
          </button>
        </div>

        <div style={{
          padding: '60px',
          textAlign: 'center',
          background: '#f9f9f9',
          borderRadius: '8px'
        }}>
          <div style={{ fontSize: '48px', marginBottom: '20px' }}>🛒</div>
          <h2>Your wishlist is empty</h2>
          <p style={{ color: '#666', marginBottom: '20px' }}>
            Add some products to get started!
          </p>
          <button
            onClick={onClose}
            style={{
              padding: '12px 24px',
              background: '#0066cc',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <h1>Wish List ({wishList.length} items)</h1>
        <button
          onClick={onClose}
          style={{
            padding: '10px 20px',
            background: '#f0f0f0',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          ← Back to Shopping
        </button>
      </div>

      {/* Wish List Items */}
      <div style={{ marginBottom: '20px' }}>
        {wishList.map(item => (
          <WishListItem
            key={item.id}
            item={item}
            onRemove={removeFromWishList}
          />
        ))}
      </div>

      {/* WishList Summary */}
      <div style={{
        padding: '20px',
        background: '#f9f9f9',
        borderRadius: '8px',
        border: '1px solid #ddd'
      }}>
        <button
          onClick={clearWishList}
          style={{
            width: '100%',
            padding: '10px',
            background: 'white',
            color: '#dc3545',
            border: '1px solid #dc3545',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Clear WishList
        </button>
      </div>
    </div>
  );
}

export default WishList;
 