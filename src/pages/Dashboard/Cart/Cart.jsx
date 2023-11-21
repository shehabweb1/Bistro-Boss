import { FaRegTrashAlt } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import SectionHeader from "../../shared/SectionHeader";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Cart = () => {
	const [cart, refetch] = useCart();
	const axiosSecure = useAxiosSecure();

	const totalPrice = cart.reduce((total, item) => total + item.price, 0);

	const handleDeleteItem = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				axiosSecure.delete(`/carts/${id}`).then((res) => {
					if (res.data.deletedCount > 0) {
						Swal.fire({
							title: "Deleted!",
							text: "Your file has been deleted.",
							icon: "success",
						});
						refetch();
					}
				});
			}
		});
	};
	return (
		<main>
			<SectionHeader heading="WANNA ADD MORE?" subHeading="My Cart" />
			<div className="w-10/12 mx-auto px-5 py-10">
				<div className="flex justify-between items-center mb-10">
					<h2 className="text-2xl font-semibold uppercase">
						Total orders: {cart.length}
					</h2>
					<h2 className="text-2xl font-semibold uppercase">
						Total price: ${totalPrice.toFixed(2)}
					</h2>
					<button className="btn bg-yellow-600 hover:bg-yellow-700 text-white text-lg">
						pay
					</button>
				</div>
				<div className="overflow-x-auto">
					<table className="table">
						<thead className="bg-yellow-600 text-white text-lg">
							<tr>
								<th></th>
								<th>ITEM IMAGE</th>
								<th>ITEM NAME</th>
								<th>PRICE</th>
								<th>ACTION</th>
							</tr>
						</thead>
						<tbody className="text-lg">
							{cart.map((item, idx) => (
								<tr key={item._id}>
									<td>{idx + 1}</td>
									<td>
										<img
											src={item.image}
											alt={item.name}
											className="w-20 h-16 rounded-lg"
										/>
									</td>
									<td>{item.name}</td>
									<td>${item.price}</td>
									<td>
										<button
											onClick={() => handleDeleteItem(item._id)}
											className="btn bg-red-500 hover:bg-red-600"
										>
											<FaRegTrashAlt className="text-lg text-white" />
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</main>
	);
};

export default Cart;
