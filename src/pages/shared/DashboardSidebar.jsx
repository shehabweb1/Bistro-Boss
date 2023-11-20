import {
	FaHome,
	FaBars,
	FaShoppingBag,
	FaCalendarAlt,
	FaWallet,
	FaShoppingCart,
	FaCalendarCheck,
	FaStar,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const DashboardSidebar = () => {
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
					<NavLink to="home" className="mb-2">
						<FaHome /> User Home
					</NavLink>
				</li>
				<li>
					<NavLink to="reservation" className="mb-2">
						<FaCalendarAlt /> reservation
					</NavLink>
				</li>
				<li>
					<NavLink to="paymentHistory" className="mb-2">
						<FaWallet /> payment history
					</NavLink>
				</li>
				<li>
					<NavLink to="cart" className="mb-2">
						<FaShoppingCart /> my cart
					</NavLink>
				</li>
				<li>
					<NavLink to="addReview" className="mb-2">
						<FaStar /> add review
					</NavLink>
				</li>
				<li>
					<NavLink to="booking" className="mb-2">
						<FaCalendarCheck /> my booking
					</NavLink>
				</li>
				<div className="divider bg-white h-[2px]"></div>
				<li>
					<NavLink to="/" className="mb-2">
						<FaHome /> Home
					</NavLink>
				</li>
				<li>
					<NavLink to="/menu" className="mb-2">
						<FaBars /> Menu
					</NavLink>
				</li>
				<li>
					<NavLink to="/shop/salad" className="mb-2">
						<FaShoppingBag /> Shop
					</NavLink>
				</li>
				<li>
					<NavLink to="/contact" className="mb-2">
						<MdEmail /> Contact
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default DashboardSidebar;
