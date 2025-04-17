import useAdmin from "../hooks/useAdmin/useAdmin"

const AdminRoutes = ({children}) => {
    const [isAdmin] = useAdmin();
    if(isAdmin) return children;
    return null;
}

export default AdminRoutes