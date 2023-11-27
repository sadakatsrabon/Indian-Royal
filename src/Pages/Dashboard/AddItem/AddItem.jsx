import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from 'react-hook-form';
import logoImg from '../../../assets/logo.png'
import useAxiosSecure from "../../../hoocks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_api = import.meta.env.VITE_image_upload_api;

const AddItem = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    // Image hosting
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_api}`;

    const onSubmit = data => {

        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(image_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgRes => {
                if (imgRes.success) {
                    const imgUrl = imgRes.data.display_url;
                    const { name, price, category, recipe } = data;
                    const newItem = { name, price: parseFloat(price), category, recipe, image: imgUrl };
                    console.log(newItem)
                    axiosSecure.post('/menu', newItem)
                        .then(data => {
                            console.log('after posting new menu item', data.data)
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    title: "Successfully added this item",
                                    showClass: {
                                        popup: `
                                    animate__animated
                                    animate__fadeInUp
                                    animate__faster
                                  `
                                    },
                                    hideClass: {
                                        popup: `
                                    animate__animated
                                    animate__fadeOutDown
                                    animate__faster
                                  `
                                    }
                                });
                            }
                        })
                }
            })
    };

    // console.log(errors);
    // console.log(image_hosting_api)

    return (
        <div className="w-full p-10">
            <SectionTitle
                heading="Add an Item"
            ></SectionTitle>
            <Helmet><title>Indian Royal || Add Item</title></Helmet>

            <div className="sm:flex">
                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* Category Selecting DropDown menu*/}
                    <select defaultValue="Select One"
                        {...register("category", { required: true })}
                        className="select select-error w-full">
                        <option disabled>Category</option>
                        <option>Pizza</option>
                        <option>Soup</option>
                        <option>Salad</option>
                        <option>Desserts</option>
                        <option>Drinks</option>
                    </select>

                    {/* Item Name */}
                    <input type="text" placeholder="Recipe Name" className="input input-bordered  input-warning w-full mt-2"
                        {...register("name", { required: true })}
                    />

                    {/* Price Input Field */}
                    <input
                        {...register("price", { required: true })}
                        type="number" placeholder="Food Price" className="input input-bordered  input-secondary w-full mt-2" />

                    {/* Description text */}
                    <div>
                        <textarea
                            {...register("recipe", { required: true })}
                            className="textarea textarea-info w-full mt-2" placeholder="Recipe Description"></textarea>
                    </div>

                    {/* Choice File input */}
                    <input
                        {...register("image", { required: true })}
                        type="file" className="file-input file-input-bordered w-full" />

                    {/* Submit Buton */}
                    <div className="text-center">
                        <input className="btn btn-outline border-0 border-y-4 w-3/5 mt-10" type="submit" value="Add Item" />
                    </div>
                </form>
                {/* logo image */}
                <div className="">
                    <img src={logoImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AddItem;