// useAxiosSecure.js
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';


const axiosSecure = axios.create({
    // toDo: Change the base url after host
    baseURL: 'https://server-indian-royal.vercel.app'
});

const useAxiosSecure = () => {
    const { signOut } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem('access-token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });

        // Interceptor to handle 401 and 403 responses
        axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    // Call signOut asynchronously
                    await signOut();

                    // Redirect to signin page
                    navigate('/signin');
                }
                return Promise.reject(error);
            }
        );

        // No need to return anything from cleanup function
        // since we are not performing any cleanup here

    }, [signOut, navigate]);

    // Return the axiosSecure instance outside the useEffect
    return [axiosSecure];
};

export default useAxiosSecure;
