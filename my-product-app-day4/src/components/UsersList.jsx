import { useState, useEffect } from "react";
import UserCard from "./UserCard";

function UserList({ onViewUsers, onClose }) {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    //fetch users
    useEffect(() => {
        setLoading(true);
        setError(null);

        const url = 'https://fakestoreapi.com/users';

        fetch(url)
            .then(res => {
                if (!res.ok) throw new Error('Failed to fetch');
                return res.json();
            })
            .then(data => {
                setUsers(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div style={{ padding: '40px', textAlign: 'center' }}>
                <h2>Loading User Details...</h2>
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
            <h1>User Details</h1>

            <button
          onClick={onClose}
          style={{
            padding: '10px 20px',
            marginBottom: '20px',
            background: '#f0f0f0',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          ← Back to Shopping
        </button>

            {/* user grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px' }}>
                {users.map(user => (
                    <UserCard key={user.id} user={user} onViewUsers={onViewUsers}/>
                ))}
            </div>
        </div>
    )
}
export default UserList