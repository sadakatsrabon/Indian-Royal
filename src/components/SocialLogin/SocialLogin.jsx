import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

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

                const savedUser = { name: loggedUser.displayName, email: loggedUser.email };
                console.log(loggedUser.displayName, loggedUser.email)

                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(forms, { replace: true });
                    })
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