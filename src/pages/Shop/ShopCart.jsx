import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const ShopCart = ({ data }) => {
	const { image, name, recipe, price } = data;
	const { user } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();
	const axiosSecure = useAxiosSecure();
	const [, refetch] = useCart();

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
		<div className="relative flex flex-col items-center">
			<img src={image} alt={name} className="w-full h-auto" />
			<p className="py-2 px-5 bg-gray-900 text-white absolute right-3 top-3 z-10">
				${price}
			</p>
			<div className="p-5">
				<h4 className="text-2xl font-bold text-center mb-3">{name}</h4>
				<p>{recipe}</p>
			</div>
			<button
				onClick={() => handleAddToCart(data)}
				className="btn btn-outline border-0 bg-gray-600 border-b-4 border-b-yellow-600  text-yellow-600  hover:bg-black hover:border-black  hover:text-yellow-600"
			>
				add to cart
			</button>
		</div>
	);
};

export default ShopCart;
