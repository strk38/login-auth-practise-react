import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../__firebase_config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    // Observe auth state change
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('Obseving current user from useEffect of AuthProvider', currentUser);
            setUser(currentUser);
            setLoading(false);

        });
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = { user, createUser, signInUser, logOut, loading, signInWithGoogle }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}
// 1. Create Context
// 2. Set Provider with value
// 3. Use AuthProvider in main.js and put RouterProvider inside it as child.
// 4.Pass the child/ children as parameter in AuthProvider
// 5. export AuthContext to use it in other component. make sure not to use default; as default can be declared once in a component
