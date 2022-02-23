import React, { useState, useEffect } from "react";

const defaultContextValue = {
    isAuthenticated: false,
}

const AuthContext = React.createContext(defaultContextValue);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(defaultContextValue.isAuthenticated);

    useEffect(() => {
        try {
            const authState = JSON.parse(localStorage.getItem('sneakers:auth.state'))
            if (authState && authState.token) {
                setIsAuthenticated(true);
            }
        } catch {}
    }, []);

    return (
        <AuthContext.Provider 
            value={{
                isAuthenticated,
                login: async(username, password) => {
                    const token = 'member_token'
                    if (username === 'Guest') {
                        localStorage.setItem('sneakers:auth.state', JSON.stringify({ token }));
                        setIsAuthenticated(true);
                        return { token };
                    }
                    setIsAuthenticated(false)
                    return {token: null, error: 'invalid password'};
                    
                    // const res = await fetch('/login') 實務上作法
                    // const res = await axios('/login') 二擇一
                },
                logout: async() => {
                    setIsAuthenticated(false);
                    localStorage.removeItem('sneakers:auth.state')
                }
            }}
        >
            { children }
        </AuthContext.Provider>
    );
};

export default AuthContext;