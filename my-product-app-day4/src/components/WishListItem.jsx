function WishListItem({ item, onRemove }) {
  return (
    <div style={{
      display: 'flex',
      gap: '20px',
      padding: '15px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      background: 'white',
      marginBottom: '10px'
    }}>
      {/* Image */}
      <img
        src={item.image}
        alt={item.title}
        style={{
          width: '100px',
          height: '100px',
          objectFit: 'contain',
          border: '1px solid #eee',
          borderRadius: '4px',
          padding: '10px'
        }}
      />

      {/* Details */}
      <div style={{ flex: 1 }}>
        <h3 style={{ margin: '0 0 5px 0', fontSize: '16px' }}>
          {item.title}
        </h3>
        <p style={{ margin: '0 0 10px 0', color: '#666', fontSize: '14px' }}>
          ${item.price} each
        </p>

        {/* Quantity Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={() => onRemove(item.id)}
            style={{
              marginLeft: 'auto',
              padding: '5px 15px',
              background: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default WishListItem;