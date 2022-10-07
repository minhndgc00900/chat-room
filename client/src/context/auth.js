import React, { createContext, useEffect, useState } from 'react'
import { loginWithGoogle } from '../services/firebase';

const AuthContext = createContext();

const AuthProvider = (props) => {
    const [user, setUser] = useState(null);

    const uid = localStorage.getItem('uid');
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const accessToken = localStorage.getItem("accessToken");

    useEffect(() => {
        if (!!accessToken) {
            setUser({
                uid, name, email, accessToken
            })
        }
    }, [accessToken, email, name, uid])


    const login = async () => {
        const user = await loginWithGoogle();
        localStorage.setItem("uid", user.uid);
        localStorage.setItem("name", user.displayName);
        localStorage.setItem("email", user.email);
        localStorage.setItem("accessToken", user.accessToken);
        if (!user) {
            // TODO: Handle failed login
        }
        setUser({
            uid: user.uid,
            name: user.displayName,
            email: user.email,
            accessToken: user.accessToken,
        });
    };

    return <AuthContext.Provider value={{ user, login }} {...props} />;
}

export { AuthProvider, AuthContext }
