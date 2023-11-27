import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Circles } from "react-loader-spinner";
import Swal from "sweetalert2";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation();

    if (loading) {
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
    if (user) {
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

export default PrivateRoute;