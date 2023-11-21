import { FaRegTrashAlt, FaUsers } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import SectionHeader from "../../shared/SectionHeader";
import Swal from "sweetalert2";

const AllUsers = () => {
	const axiosSecure = useAxiosSecure();

	const { data: users = [], refetch } = useQuery({
		queryKey: ["users"],
		queryFn: async () => {
			const res = await axiosSecure.get(`/users`);
			return res.data;
		},
	});

	const handleUserRole = (user) => {
		axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
			if (res.data.modifiedCount > 0) {
				Swal.fire({
					position: "top-end",
					icon: "success",
					title: `${user.name} is an Admin Now!`,
					showConfirmButton: false,
					timer: 1500,
				});
				refetch();
			}
		});
	};

	const handleDeleteUser = (id) => {
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
				axiosSecure.delete(`/users/${id}`).then((res) => {
					if (res.data.deletedCount > 0) {
						Swal.fire({
							title: "Deleted!",
							text: "Your user has been deleted.",
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
			<SectionHeader heading="MANAGE ALL USERS" subHeading="How many??" />
			<div className="w-10/12 mx-auto px-5 py-10">
				<div className="mb-10">
					<h2 className="text-2xl font-semibold uppercase">
						Total users: {users.length}
					</h2>
				</div>
				<div className="overflow-x-auto">
					<table className="table">
						<thead className="bg-yellow-600 text-white text-lg">
							<tr>
								<th></th>
								<th>NAME</th>
								<th>EMAIL</th>
								<th>ROLE</th>
								<th>ACTION</th>
							</tr>
						</thead>
						<tbody className="text-lg">
							{users.map((user, idx) => (
								<tr key={user._id}>
									<td>{idx + 1}</td>
									<td>{user.name}</td>
									<td>{user.email}</td>
									<td>
										{user.role === "admin" ? (
											"Admin"
										) : (
											<button
												onClick={() => handleUserRole(user)}
												className="btn bg-orange-400 hover:bg-orange-500"
											>
												<FaUsers className="text-lg text-white" />
											</button>
										)}
									</td>
									<td>
										<button
											onClick={() => handleDeleteUser(user._id)}
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

export default AllUsers;
