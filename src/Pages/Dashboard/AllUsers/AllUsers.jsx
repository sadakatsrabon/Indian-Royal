import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hoocks/useAxiosSecure";

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();

    const { data: users = [], isLoading, isError, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            try {
                const res = await axiosSecure.get('/users');
                // Checking for a successful response
                if (!res.ok) {
                    // throw new Error('Network response was not ok');
                }

                return res.data;
            } catch (error) {
                // Handling fetch errors
                console.error('Error fetching user data:', error);
                throw new Error('Failed to fetch user data');
            }
        },
    });

    // Promote user to admin role
    const handleMakeAdmin = (user) => {
        fetch(`https://server-indian-royal.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Wow !!! ${user.name} has get the Admin power!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.error('Error promoting user to admin:', error);
            });
    };

    // Delete user
    const handleDelete = (user) => {
        // TODO: Implement user deletion logic
    };

    return (
        <div className="w-full mt-10 p-10">
            <Helmet>
                Indian Royal || All users
            </Helmet>
            <h3 className="text-3xl font-semibold text-center">We have  <span className="">{users.length}</span> <span className="text-yellow-600">ROYAL</span> users</h3>
            <div className="divider"></div>
            {isLoading && <div className="text-lg">Loading data.  Please wait...</div>}
            {isError && <div>Error fetching data</div>}
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* table header */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* table rows with user data and actions */}
                        {users.map((user, index) =>
                            <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user.role === 'admin' ? 'admin' :
                                        <button onClick={() => handleMakeAdmin(user)} className="btn btn-outline btn-circle btn-sm"><FaUserShield /></button>
                                    }
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(user)} className="btn btn-outline bg-red-400 btn-sm">X</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;







// import { useQuery } from "@tanstack/react-query";
// import { Helmet } from "react-helmet-async";
// import { FaUserShield } from "react-icons/fa";
// import Swal from "sweetalert2";
// import useAxiosSecure from "../../../hoocks/useAxiosSecure";

// const AllUsers = () => {
//     // const [axiosSecure] = useAxiosSecure();
//     // const { data: users = [], refetch } = useQuery(['/users'], async () => {
//     //     const res = await axiosSecure.get('users')
//     //     return res.data;
//     // });



//     // 
//     // const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
//     //     queryKey: ['isAdmin', user?.email],
//     //     enabled: !loading,
//     //     queryFn: async () => {
//     //         const res = await axiosSecure.get(`/users/admin/${user?.email}`)
//     //         // console.log('is Admin response', res)
//     //         return res.data.admin;
//     //     }
//     // })
//     // return [isAdmin, isAdminLoading]
//     // 
//     // 
//     const [axiosSecure] = useAxiosSecure();
//     const { data: users = [], isLoading, isError, refetch } = useQuery({
//         queryKey: ['users'], // toCheck: write - 'users' with out an array()
//         queryFn: async () => {
//             const res = await axiosSecure.get('/users');
//             if (!res.ok) {
//                 throw new Error('Network response was not ok');
//             }
            
//             return res.data;
//         },
//     });

//     // 
//     // 
//     // 

//     if (isLoading) {
//         return <div>Loading...</div>;
//     }

//     if (isError) {
//         return <div>Error fetching data</div>;
//     }


//     const handleMakeAdmin = user => {
//         fetch(`https://server-indian-royal.vercel.app/users/admin/${user._id}`, {
//             method: 'PATCH'
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data)
//                 if (data.modifiedCount) {
//                     refetch();
//                     Swal.fire({
//                         position: "top-end",
//                         icon: "success",
//                         title: `${user.name} is added to Admin!`,
//                         showConfirmButton: false,
//                         timer: 1500
//                     });
//                 }
//             })
//     };
// // toDo: User delete
//     const handleDelete = (user) => {

//     };

//     return (
//         <div className="w-full">
//             <Helmet>
//                 Indian Royal || All users
//             </Helmet>
//             <h3 className="text-3xl font-semibold">Total Users : {users.length}</h3>
//             <div className="overflow-x-auto">
//                 <table className="table table-zebra">
//                     {/* head */}
//                     <thead>
//                         <tr>
//                             <th>#</th>
//                             <th>Name</th>
//                             <th>Email</th>
//                             <th>Role</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {/* row */}
//                         {
//                             users.map((user, index) =>
//                                 <tr key={user._id}>
//                                     <th>{index + 1}</th>
//                                     <td>{user.name}</td>
//                                     <td>{user.email}</td>
//                                     <td>{
//                                         user.role === 'admin' ? 'admin' :
//                                             <button onClick={() => handleMakeAdmin(user)} className="btn btn-outline btn-circle btn-sm"><FaUserShield /></button>

//                                     }</td>
//                                     <td>
//                                         <button onClick={() => handleDelete(user)} className="btn btn-outline bg-red-400 btn-sm">X</button>
//                                     </td>
//                                 </tr>
//                             )
//                         }
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default AllUsers;




// // import { useQuery } from "@tanstack/react-query";

// // const AllUsers = () => {
// //     // ToDo : need to sesolve some error in this page
// //     const {data: users=[], refetch} = useQuery(['users'], async ()=> {
// //         const res = await fetch('https://server-indian-royal.vercel.app/users')
// //         return res.json;
// //     } )
// //     return (
// //         <div>
// //             {users.length}
// //         </div>
// //     );
// // };

// // export default AllUsers;