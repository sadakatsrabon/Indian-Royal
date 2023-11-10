import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
// import { Navigate, useLocation } from "react-router-dom";
import { Circles } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    // const location = useLocation();

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

    // return <Navigate
    //     to="/"
    //     state={{ formLocation: location.pathname }} // Passing only the pathname as state
    //     replace
    // />

};

export default PrivateRoute;