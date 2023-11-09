import { useEffect, useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase/firebase.config";
// Export The Auth Context.
export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // (1) At First - Create an user of this website
    const createUser = (email, password) => {
        setLoading(true)
        return (createUserWithEmailAndPassword(auth, email, password));
    };

    // (2) SignIn after Create an user.
    const signIn = (email, password) => {
        setLoading(true);
        return (signInWithEmailAndPassword(auth, email, password));
    };

    // (3) And Finally - LogOut / SignOut;
    // const signOut = () => {
    //     setLoading(true);
    //     return (signOut(auth));
    // }


    const signOut = () => {
        setLoading(true);
        return auth.signOut();
    }


    useEffect(() => {
        // For unsubscribe : We need to Declear a varable and place the OnAuthStateChanged;
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('Current User:', currentUser);
            setLoading(false);
        });
        return () => {
            return (unsubscribe());
        }
    }, [])

    // Send the decleared item to others.
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        signOut
    }

    // Set children on Auth Context Provider.
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
