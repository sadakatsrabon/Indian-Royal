// import React from 'react';

import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Login = () => {

    const { signIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const forms = location.state?.form?.pathname || "/";

    const handleSignin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        // SignIn mechanism section.
        
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                // Show success alart
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully Signed In",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(forms, {replace : true});
            })
    }
    return (
        <>
            <Helmet>
                <title>Indian Royal || Sign In</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold"><span className="text-yellow-500">Royal</span> Sign In  !</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                        {/* Home button */}
                        <Link to="/"><button className=" btn btn-outline border-0 border-b-4 border-r-2">back to home</button></Link>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignin} className="card-body">

                            {/* Email Field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>

                            {/* Password field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                            </div>
                            {/* Redrict to SignUp page */}
                            <label className="label">
                                <Link to='/signup' className="label-text-alt link link-hover font-mono text-blue-700">Create an ROYAL account</Link>
                            </label>

                            {/* Submit button */}
                            <div className="form-control mt-6">
                                <input className="btn btn-primary btn-outline border-0 border-y-2 border-x-4" type="submit" value="Singn In" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;