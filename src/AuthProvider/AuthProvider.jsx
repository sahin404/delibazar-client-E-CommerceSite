import { createContext, useState } from "react"
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const info = {
    user, loading
  }
  return (
    <AuthContext.Provider value={info}>
      {children}
    </AuthContext.Provider >
  )
}

export default AuthProvider