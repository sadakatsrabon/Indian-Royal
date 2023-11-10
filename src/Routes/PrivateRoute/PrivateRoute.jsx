import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import { Circles } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
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
    return (<Navigate to="/signin"></Navigate>);
};

export default PrivateRoute;