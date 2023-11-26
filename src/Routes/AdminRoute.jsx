import { Navigate, useLocation } from "react-router-dom";
import { Circles } from "react-loader-spinner";
import Swal from "sweetalert2";
import useAuth from "../hoocks/useAuth";
import useAdmin from "../hoocks/useAdmin";

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <div className="mx-auto justify-center items-center text-center">
            <Circles
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    }
    if (user && isAdmin) {

        return children;
    }
    // 
    Swal.fire({
        position: "top-end",
        title: "Pleas SignIn to get offers",
        showConfirmButton: false,
        timer: 1500
    });
    return <Navigate to="/signin" state={{ formLocation: location.pathname }} replace />

};

export default AdminRoute;