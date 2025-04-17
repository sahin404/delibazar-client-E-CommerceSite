import ForbiddenAccess from "../components/nonShared/ForbiddenAccess";
import useAdmin from "../hooks/useAdmin/useAdmin"

const AdminRoutes = ({children}) => {
    const [isAdmin] = useAdmin();
    if(isAdmin) return children;
    return <ForbiddenAccess></ForbiddenAccess>
}

export default AdminRoutes