import React, { createContext, useState } from 'react'
import { loginWithGoogle } from '../services/firebase';

const AuthContext = createContext();

const AuthProvider = (props) => {
    const [user, setUser] = useState(null);

    const login = async () => {
        const user = await loginWithGoogle();
        console.log(222, user);
        if (!user) {
            // TODO: Handle failed login
        }
        setUser(user);
    };

    return <AuthContext.Provider value={{ user, login }} {...props} />;
}

export { AuthProvider, AuthContext }
