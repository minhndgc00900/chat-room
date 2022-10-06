import React, { createContext, useState } from 'react'
import { loginWithGoogle } from '../services/firebase';

const AuthContext = createContext();

const AuthProvider = (props) => {
    const [user, setUser] = useState(null);

    const login = async () => {
        const user = await loginWithGoogle();
        console.log(23, user);
        localStorage.setItem("name", user.displayName);
        localStorage.setItem("email", user.email);
        localStorage.setItem("profilePic", user.profilePic);
        localStorage.setItem("accessToken", user.accessToken);
        if (!user) {
            // TODO: Handle failed login
        }
        setUser(user);
    };

    return <AuthContext.Provider value={{ user, login }} {...props} />;
}

export { AuthProvider, AuthContext }
