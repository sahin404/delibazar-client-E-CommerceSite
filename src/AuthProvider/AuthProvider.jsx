import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
export const AuthContext = createContext(null);
const auth = getAuth();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);


  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);

  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setLoading(false);
        console.log(currentUser);
      }
    })
    return () => {
      return unSubscribe();
    }
  }, [])



  const info = {
    user, loading, signUp, signIn, logOut
  }
  return (
    <AuthContext.Provider value={info}>
      {children}
    </AuthContext.Provider >
  )
}

export default AuthProvider