import {
	FaHome,
	FaBars,
	FaShoppingBag,
	FaListUl,
	FaBook,
	FaUsers,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ImSpoonKnife } from "react-icons/im";
import { Link, NavLink } from "react-router-dom";

const AdminSidebar = () => {
	return (
		<div className="drawer-side">
			<label
				htmlFor="my-drawer-2"
				aria-label="close sidebar"
				className="drawer-overlay"
			></label>

			<ul className="menu w-72 text-xl font-semibold uppercase min-h-full text-black bg-orange-300">
				<li>
					<Link
						to="/dashboard"
						className="flex flex-col items-center py-10 text-black"
					>
						<h2 className="text-4xl font-bold">BISTRO BOSS</h2>
						<h4 className="text-xl" style={{ letterSpacing: "0.5em" }}>
							Restaurant
						</h4>
					</Link>
				</li>
				<li>
					<NavLink to="home" className="mb-5">
						<FaHome /> Admin Home
					</NavLink>
				</li>
				<li>
					<NavLink to="addItems" className="mb-5">
						<ImSpoonKnife /> add items
					</NavLink>
				</li>
				<li>
					<NavLink to="manageItems" className="mb-5">
						<FaListUl /> manage items
					</NavLink>
				</li>
				<li>
					<NavLink to="manageBooking" className="mb-5">
						<FaBook /> Manage bookings
					</NavLink>
				</li>
				<li>
					<NavLink to="allUsers" className="mb-5">
						<FaUsers /> all users
					</NavLink>
				</li>
				<div className="divider bg-white h-[2px]"></div>
				<li>
					<NavLink to="/" className="mb-5">
						<FaHome /> Home
					</NavLink>
				</li>
				<li>
					<NavLink to="/menu" className="mb-5">
						<FaBars /> Menu
					</NavLink>
				</li>
				<li>
					<NavLink to="/shop/salad" className="mb-5">
						<FaShoppingBag /> Shop
					</NavLink>
				</li>
				<li>
					<NavLink to="/contact" className="mb-5">
						<MdEmail /> Contact
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default AdminSidebar;
