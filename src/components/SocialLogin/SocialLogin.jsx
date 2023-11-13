import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const forms = location.state?.form?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser)
                navigate(forms, { replace: true });
            })
    }

    return (
        <div>
            <div className="divider"></div>
            <div className="text-center">
                <button onClick={(handleGoogleSignIn)} className="btn btn-circle btn-outline text-xl">G</button>
            </div>
        </div>
    );
};

export default SocialLogin;