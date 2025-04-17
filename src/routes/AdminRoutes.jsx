import { useContext } from "react";
import ForbiddenAccess from "../components/nonShared/ForbiddenAccess";
import useAdmin from "../hooks/useAdmin/useAdmin"
import { AuthContext } from "../AuthProvider/AuthProvider";
import LoadingPage from "../components/nonShared/LoadingPage";

const AdminRoutes = ({children}) => {
    const {loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    if(loading || isAdminLoading){
        return <LoadingPage></LoadingPage>
    }
    if(!isAdmin){
        return <ForbiddenAccess></ForbiddenAccess>
    }
    
    return children;
    
}

export default AdminRoutes