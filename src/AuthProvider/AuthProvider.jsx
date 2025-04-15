import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import { auth } from "../firebase/firebase.config";
import useAxiosSecure from "../hooks/useAxiosPublic/useAxiosSecure";

export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();


  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);

  }
  const updatePro = (name) => {
    return updateProfile(auth.currentUser, {
        displayName: name,
    })
}

  const logOut = () => {
    return signOut(auth);
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setLoading(false);
        // console.log(currentUser);
        axiosSecure.post('/users',{
          name: currentUser.displayName,
          email: currentUser.email,
          date: currentUser.metadata.creationTime
        })
        .then(()=>{
          
        })
        .catch(()=>{
          console.log('error occured');
        })
      }
      
    })
    return () => {
      return unSubscribe();
    }
  }, [])

  const info = {
    user, loading, signUp, signIn, logOut,updatePro
  }
  return (
    <AuthContext.Provider value={info}>
      {children}
    </AuthContext.Provider >
  )
}

export default AuthProvider