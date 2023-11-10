// import React from 'react';

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Signup = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);


    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const imgUrl = form.ImgUrl.value;

        // Code for SignUp mechanism
        createUser(email, password, name, imgUrl)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                updateUserProfile(name, imgUrl)
                    .then(() => {
                        console.log('User Profile Info Updted Succesfully')
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Update your profile doen",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    })
                    .catch((error) => {
                        console.error(error);
                    })


                // Showing Success Alart
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Congratulations, You have Successfully Signed Up",
                    showConfirmButton: false,
                    timer: 1500
                });
            })

    };

    return (
        <>
            <Helmet>
                <title>Indian Royal || Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold"> Sign Up to <span className="text-yellow-500">Royal</span> !</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                        {/* Home Button */}
                        <Link to="/"><button className=" btn btn-outline border-0 border-b-4 border-r-2">back to home</button></Link>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body">

                            {/* Name's field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Input your full name" className="input input-bordered" required />
                            </div>

                            {/* Email div */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Valid Email required" className="input input-bordered" required />
                            </div>

                            {/* Password div */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="You must setup a strong password" className="input input-bordered" required />
                            </div>

                            {/* Image Url field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image Url</span>
                                </label>
                                <input type="text" name="ImgUrl" placeholder="Yor face-photo-url , for security verify." className="input input-bordered" required />
                            </div>

                            {/* Rederict to Sign In */}
                            <label className="label">
                                <Link to='/signin' className="label-text-alt link link-hover font-mono text-blue-700">Go to Royal Login /SignIn Page.</Link>
                            </label>

                            {/* SignUp Submit Button */}
                            <div className="form-control mt-6">
                                <input className="btn btn-warning btn-outline border-0 border-y-2 border-x-4" type="submit" value="Singn Up" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;