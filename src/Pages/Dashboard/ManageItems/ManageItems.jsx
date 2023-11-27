import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../hoocks/useMenu';

const ManageItems = () => {
    const [menu] = useMenu();
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
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Recipe</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row  */}
                        {
                            menu.map(item =>
                                <tr key={item._id}>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="avatar mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Recipe" />
                                        </div>
                                    </td>
                                    <td>
                                       <h5>{item.name}</h5>
                                    </td>
                                    <td><p>${item.price}</p></td>
                                    <td>
                                        <button className="btn btn-outline bg-green-500 btn-ghost btn-xs">Update</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-outline bg-red-400 btn-ghost btn-xs">X</button>
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