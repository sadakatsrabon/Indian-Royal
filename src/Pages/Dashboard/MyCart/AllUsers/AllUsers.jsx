import { useQuery } from "@tanstack/react-query";

const AllUsers = () => {
    const { data: users = [], isLoading, isError, refetch } = useQuery({
        queryKey: 'users', // Updated to use queryKey as an object property
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        },
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching data</div>;
    }

    return (
        <div>
            {users.length}
        </div>
    );
};

export default AllUsers;




// import { useQuery } from "@tanstack/react-query";

// const AllUsers = () => {
//     // ToDo : need to sesolve some error in this page
//     const {data: users=[], refetch} = useQuery(['users'], async ()=> {
//         const res = await fetch('http://localhost:5000/users')
//         return res.json;
//     } )
//     return (
//         <div>
//             {users.length}
//         </div>
//     );
// };

// export default AllUsers;