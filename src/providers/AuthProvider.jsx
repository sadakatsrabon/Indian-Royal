import { useEffect, useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signOut = () => {
        setLoading(true);
        return auth.signOut();
    }

    const updateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        });
    }

    useEffect(() => {
        // Need to place tis functio in a variable . for this reason we add "const" at last tiem.
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        signOut,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;



// import { useEffect, useState } from "react";
// import { createContext } from "react";
// import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { app } from "../firebase/firebase.config";
// // Export The Auth Context.
// export const AuthContext = createContext(null);

// const auth = getAuth(app);

// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     // (1) At First - Create an user of this website
//     const createUser = (email, password) => {
//         setLoading(true)
//         return (createUserWithEmailAndPassword(auth, email, password));
//     };

//     // (2) SignIn after Create an user.
//     const signIn = (email, password) => {
//         setLoading(true);
//         return (signInWithEmailAndPassword(auth, email, password));
//     };

//     // (3) And Finally - LogOut / SignOut;
//     const signOut = () => {
//         setLoading(true);
//         return auth.signOut();
//     }

//     // (4) Update Profile Section;
//     const updateUserProfile = (name, image) => {
//         return updateProfile(auth ,currentUser, {
//             displayName: name, photoURL: image

//         })

//         useEffect(() => {
//             // For unsubscribe : We need to Declear a varable and place the OnAuthStateChanged;
//             const unsubscribe = onAuthStateChanged(auth, currentUser => {
//                 setUser(currentUser);
//                 console.log('Current User:', currentUser);
//                 setLoading(false);
//             });
//             return () => {
//                 return (unsubscribe());
//             }
//         }, [])

//         // Send the decleared item to others.
//         const authInfo = {
//             user,
//             loading,
//             createUser,
//             signIn,
//             signOut,
//             updateUserProfile
//         }

//         // Set children on Auth Context Provider.
//         return (
//             <AuthContext.Provider value={authInfo}>
//                 {children}
//             </AuthContext.Provider>
//         );
//     };

//     export default AuthProvider;
