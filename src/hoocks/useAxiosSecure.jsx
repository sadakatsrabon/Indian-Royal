// useAxiosSecure.js
import { useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
// import AuthContext from './AuthContext';

const useAxiosSecure = () => {
    // const [axiosSecure, setAxiosSecure] = useState(null);
    const { signOut } = useContext(AuthContext);

    const navigate = useNavigate();


    // 
    const axiosSecure = axios.create({
        baseURL: 'http://localhost:5000'
    })


    useEffect(() => {
        // Create an Axios instance with a base URL

        // 
        // 
        // toDo : comment
        const instance = axios.create({
            baseURL: 'your-base-url',
        });
        // 
        // 
        // 

        // Interceptor to inject authorization header
        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem('access-token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });

        // Interceptor to handle 401 and 403 responses
        instance.interceptors.response.use(
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

        // 
        // 
        // setAxiosSecure(instance);
        // 
        // 

        // No need to return anything from cleanup function
        // since we are not performing any cleanup here

    }, [signOut, navigate, axiosSecure]);

    // Return the axiosSecure instance outside the useEffect
    return [axiosSecure];
};

export default useAxiosSecure;
