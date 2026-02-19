function UserCard({ user, onViewUsers }) {
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

    onClick={() => onViewUsers(user.id)}
    >
      <div
        style={{
        border: '1px solid #ddd',
        borderRadius: '50px',
        padding: '15px',
        background: '#0066cc',
        height: '27px',
        width: '40px',
        textAlign: 'center',
        fontSize: '22px',
        color: 'white',
        fontWeight: 'bolder',
        marginBottom: '15px'
      }}>
        {user.name.firstname[0].toUpperCase()}{user.name.lastname[0].toUpperCase()}
      </div>
      
      <h3 style={{
        fontSize: '17px',
        margin: '0 0 10px 0',
        height: '30px',
        overflow: 'hidden'
      }}>
        User Id: {user.id}
      </h3>
      <h3 style={{
        fontSize: '17px',
        margin: '0 0 10px 0',
        height: '30px',
        overflow: 'hidden'
      }}>
        UserName: {user.username}
      </h3>
      <h3 style={{
        fontSize: '17px',
        margin: '0 0 10px 0',
        height: '45px',
        overflow: 'hidden'
      }}>
        Email: {user.email}
      </h3>
      <h3 style={{
        fontSize: '17px',
        margin: '0 0 10px 0',
        height: '30px',
        overflow: 'hidden'
      }}>
        Name: {user.name.firstname} {user.name.lastname}
      </h3>
      
    </div>
  );
}

export default UserCard;
