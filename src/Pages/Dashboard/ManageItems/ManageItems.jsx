import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../hoocks/useMenu';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hoocks/useAxiosSecure';

const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure();

    const handleDelete = (item) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure to delete?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sure , Delete it",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/menu/${item._id}`)
                    .then(res => {
                        console.log('Deleted Response', res.data)
                        if (res.data.deletedCount > 0) {
                            refetch();
                            swalWithBootstrapButtons.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }

                    })

            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your imaginary file is safe :)",
                    icon: "error"
                });
            }
        });
    }

    return (
        <div className='w-full'>
            <Helmet>Indian Royal || Manage Items</Helmet>
            <SectionTitle
                subHeading="Hello Boss"
                heading="Manage Your Item"
            ></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>S & Q</th>
                            <th>Recipe</th>
                            <th>Category</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row  */}
                        {
                            menu.map((item, index) =>
                                <tr key={item._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="avatar mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Recipe" />
                                        </div>
                                    </td>
                                    <td>
                                        <h5>{item.category}</h5>
                                    </td>
                                    <td>
                                        <h5>{item.name}</h5>
                                    </td>
                                    <td><p className='text-right'>${item.price}</p></td>
                                    <td>
                                        <button className="btn btn-outline bg-green-500 btn-ghost btn-xs">Update</button>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleDelete(item)}
                                            className="btn btn-outline bg-red-400 btn-ghost btn-xs">X</button>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItems;