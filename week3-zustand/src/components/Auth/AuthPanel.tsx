import { useState } from "react";
import useAuthStore from "../../stores/useAuthStore";

function AuthPanel() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {user, isLoggedIn, isLoading, error, login, logout} = useAuthStore();

    const handleLogin = (e: React.ChangeEvent) => {
        e.preventDefault()
        login(email, password)
    }

    if(isLoggedIn && user) {
        return (
            <div>
                <h2>Auth Demo</h2>
                <p>Welcome, {user.name}!</p>
                <button onClick={logout}>Logout</button>
            </div>
        )
    }

    return (
        // for form handling
        <form onSubmit={handleLogin}> 
            <div>
                <h2>Login Form</h2>
                <p>Email: </p>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                <p>Password: </p>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                {/* used for forms */}
                <button type="submit">Login</button> 
            </div>
        </form>
    )
    
}

export default AuthPanel;