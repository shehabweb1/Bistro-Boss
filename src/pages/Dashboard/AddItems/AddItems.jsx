import { useForm } from "react-hook-form";
import SectionHeader from "../../shared/SectionHeader";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_key = import.meta.env.VITE_IMAGE_KEY;
const image_api = `https://api.imgbb.com/1/upload?key=${image_key}`;

const AddItems = () => {
	const { register, handleSubmit, reset } = useForm();
	const axiosPublic = useAxiosPublic();
	const axiosSecure = useAxiosSecure();

	const onSubmit = async (data) => {
		const imageFile = { image: data.image[0] };
		const res = await axiosPublic.post(image_api, imageFile, {
			headers: {
				"content-type": "multipart/form-data",
			},
		});
		if (res.data) {
			const menuItem = {
				name: data.name,
				category: data.category,
				price: parseFloat(data.price),
				recipe: data.recipe,
				image: res.data.data.display_url,
			};

			const menuRes = await axiosSecure.post("/menu", menuItem);
			if (menuRes.data.insertedId) {
				Swal.fire({
					position: "top-end",
					icon: "success",
					title: "This item has been added",
					showConfirmButton: false,
					timer: 1500,
				});
				reset();
			}
		}
	};
	return (
		<main>
			<SectionHeader heading="ADD AN ITEM" subHeading="What's new?" />
			<div className="card w-10/12 mx-auto px-5 py-10 shadow-2xl">
				<form onSubmit={handleSubmit(onSubmit)} className="card-body">
					<div className="form-control">
						<label className="label">
							<span className="label-text">Recipe name*</span>
						</label>
						<input
							type="text"
							{...register("name", { required: true })}
							name="name"
							placeholder="Recipe name"
							className="input input-bordered"
						/>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Category*</span>
							</label>
							<select
								defaultValue="default"
								className="select select-bordered w-full max-w-xs"
								{...register("category")}
							>
								<option disabled value="default">
									Select Category
								</option>
								<option value="salad">Salad</option>
								<option value="drinks">Drinks</option>
								<option value="dessert">Dessert</option>
								<option value="pizza">Pizza</option>
								<option value="soup">Soup</option>
								<option value="offered">Offered</option>
								<option value="popular">Popular</option>
							</select>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Price*</span>
							</label>
							<input
								type="text"
								{...register("price", { required: true })}
								name="price"
								placeholder="Price"
								className="input input-bordered"
							/>
						</div>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Recipe Details*</span>
						</label>
						<textarea
							rows="5"
							{...register("recipe", { required: true })}
							name="recipe"
							placeholder="Recipe Details"
							className="textarea textarea-bordered"
						></textarea>
					</div>
					<input
						type="file"
						{...register("image", { required: true })}
						name="image"
						className="file-input w-full max-w-xs"
					/>
					<div className="form-control mt-6">
						<input type="submit" value="Add Item" className="btn btn-warning" />
					</div>
				</form>
			</div>
		</main>
	);
};

export default AddItems;
