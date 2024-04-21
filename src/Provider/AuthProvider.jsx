import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user, setUser] = useState({displayName: "pronoy"})
    const [loading, setLoading] = useState(true);

    const createUser = (email,password)=>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    // google account 
    const googleSignIn = ()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }

    // update user profile
    const updateUserProfile = (displayName, photoURL) => {
        setLoading(true);

        const currentUser = auth.currentUser;

        return updateProfile(currentUser, {
            displayName: displayName,
            photoURL: photoURL
        })
            .then(() => {
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error updating profile:", error);
                setLoading(false);
            });
    }

    // onAuth state change
    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth,currentUser =>{
             setUser(currentUser);
             setLoading(false);
         });
         return ()=>{
             unsubscribe();
         }
     },[])

  

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleSignIn,
        updateUserProfile
    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;