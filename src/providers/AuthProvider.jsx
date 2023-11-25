import { useEffect, useState } from "react";
import { createContext } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const GoogleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Google SignIn
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, GoogleProvider)
    }

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

            // get and send access token
            //  toCheck: url
            if (currentUser) {
                axios.post('http://localhost:5000/jwt', { email: currentUser.email })
                    .then(data => {
                        console.log(data.data.token)
                        // Set Access token to Local storage
                        // But not recomanded to set in local storage
                        localStorage.setItem('access-token', data.data.token)
                    })
            }
            else {
                localStorage.removeItem('access-token')
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
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
