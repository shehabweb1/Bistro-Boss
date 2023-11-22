import { useLoaderData } from "react-router-dom";
import SectionHeader from "../../shared/SectionHeader";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const UpdateItem = () => {
	const { name, category, price, recipe, _id } = useLoaderData();
	const { register, handleSubmit } = useForm();
	const axiosSecure = useAxiosSecure();

	const onSubmit = async (data) => {
		const menuItem = {
			name: data.name,
			category: data.category,
			price: parseFloat(data.price),
			recipe: data.recipe,
		};

		const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
		if (menuRes.data.modifiedCount) {
			Swal.fire({
				position: "top-end",
				icon: "success",
				title: "This item has been added",
				showConfirmButton: false,
				timer: 1500,
			});
		}

		console.log(menuRes);
	};

	return (
		<main>
			<SectionHeader heading="UPDATE ITEM" subHeading="Hurry Up!" />
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
							defaultValue={name}
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
								defaultValue={category}
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
								defaultValue={price}
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
							defaultValue={recipe}
							{...register("recipe", { required: true })}
							name="recipe"
							placeholder="Recipe Details"
							className="textarea textarea-bordered"
						></textarea>
					</div>
					<div className="form-control mt-6">
						<button
							type="submit"
							className="btn bg-yellow-700 hover:bg-yellow-800 text-white flex items-center mx-auto"
						>
							Update Recipe Details
						</button>
					</div>
				</form>
			</div>
		</main>
	);
};

export default UpdateItem;
