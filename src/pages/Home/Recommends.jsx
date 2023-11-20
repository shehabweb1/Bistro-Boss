import { useEffect, useState } from "react";
import SectionHeader from "../shared/SectionHeader";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const Recommends = () => {
	const [menu, setMenu] = useState([]);
	const { user } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();
	const axiosSecure = useAxiosSecure();
	const [, refetch] = useCart();

	useEffect(() => {
		fetch("menu.json")
			.then((res) => res.json())
			.then((data) => {
				setMenu(data.slice(0, 3));
			});
	}, []);

	const handleAddToCart = (item) => {
		if (user && user.email) {
			const cartItem = {
				email: user.email,
				foodId: item._id,
				image: item.image,
				name: item.name,
				price: item.price,
			};
			axiosSecure.post("/carts", cartItem).then((res) => {
				if (res.data.insertedId) {
					Swal.fire({
						position: "top-end",
						icon: "success",
						title: "This item has been added",
						showConfirmButton: false,
						timer: 1500,
					});
					refetch();
				}
			});
		} else {
			Swal.fire({
				title: "Do you want to Login?",
				text: "Please login first then add cart!",
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "Yes, Login!",
			}).then((result) => {
				if (result.isConfirmed) {
					navigate("/login", { state: { from: location } });
				}
			});
		}
	};
	return (
		<section className="py-10">
			<SectionHeader heading={"CHEF RECOMMENDS"} subHeading={"Should Try"} />
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
				{menu.map((item) => (
					<div
						key={item._id}
						className="flex flex-col justify-between items-center"
					>
						<img src={item.image} alt={item.name} className="w-full h-auto" />
						<div className="p-5">
							<h4 className="text-2xl font-bold text-center mb-3">
								{item.name}
							</h4>
							<p>{item.recipe}</p>
						</div>
						<button
							onClick={() => handleAddToCart(item)}
							className="btn btn-outline border-0 bg-gray-600 border-b-4 border-b-yellow-600  text-yellow-600  hover:bg-black hover:border-black  hover:text-yellow-600"
						>
							add to cart
						</button>
					</div>
				))}
			</div>
		</section>
	);
};

export default Recommends;
