import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import { auth } from "../firebase/firebase.config";
import useAxiosSecure from "../hooks/useAxiosPublic/useAxiosSecure";
import useAxiosPublic from "../hooks/useAxiosPublic/useAxiosPublic";
export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();


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
        const user = {email:currentUser.email}
        axiosPublic.post('/jwt',user)
        .then(res=>{
          if(res.data.token){
            localStorage.setItem('access-token', res.data.token);
          }
         
        })
      }
      else{
        localStorage.removeItem('access-token');
      }

    })
    return () => {
      return unSubscribe();
    }
  }, [axiosSecure])



  const info = {
    user, loading, signUp, signIn, logOut, updatePro
  }
  return (
    <AuthContext.Provider value={info}>
      {children}
    </AuthContext.Provider >
  )
}

export default AuthProvider