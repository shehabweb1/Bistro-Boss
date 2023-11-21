import {
	FaHome,
	FaBars,
	FaShoppingBag,
	FaCalendarAlt,
	FaWallet,
	FaShoppingCart,
	FaCalendarCheck,
	FaStar,
	FaListUl,
	FaBook,
	FaUsers,
} from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";

const DashboardSidebar = () => {
	const isAdmin = true;
	return (
		<div className="drawer-side">
			<label
				htmlFor="my-drawer-2"
				aria-label="close sidebar"
				className="drawer-overlay"
			></label>

			<ul className="menu w-72 text-xl font-semibold uppercase min-h-full text-black bg-orange-300">
				<div className="flex flex-col items-center py-10 text-black cursor-pointer">
					<h2 className="text-4xl font-bold">BISTRO BOSS</h2>
					<h4 className="text-xl" style={{ letterSpacing: "0.5em" }}>
						Restaurant
					</h4>
				</div>

				{isAdmin ? (
					<>
						<li>
							<NavLink to="/dashboard/home" className="mb-5">
								<FaHome /> Admin Home
							</NavLink>
						</li>
						<li>
							<NavLink to="/dashboard/addItems" className="mb-5">
								<ImSpoonKnife /> add items
							</NavLink>
						</li>
						<li>
							<NavLink to="/dashboard/manageItems" className="mb-5">
								<FaListUl /> manage items
							</NavLink>
						</li>
						<li>
							<NavLink to="/dashboard/manageBooking" className="mb-5">
								<FaBook /> Manage bookings
							</NavLink>
						</li>
						<li>
							<NavLink to="/dashboard/allUsers" className="mb-5">
								<FaUsers /> all users
							</NavLink>
						</li>
					</>
				) : (
					<>
						<li>
							<NavLink to="/dashboard/home" className="mb-2">
								<FaHome /> User Home
							</NavLink>
						</li>
						<li>
							<NavLink to="/dashboard/reservation" className="mb-2">
								<FaCalendarAlt /> reservation
							</NavLink>
						</li>
						<li>
							<NavLink to="/dashboard/paymentHistory" className="mb-2">
								<FaWallet /> payment history
							</NavLink>
						</li>
						<li>
							<NavLink to="/dashboard/cart" className="mb-2">
								<FaShoppingCart /> my cart
							</NavLink>
						</li>
						<li>
							<NavLink to="/dashboard/addReview" className="mb-2">
								<FaStar /> add review
							</NavLink>
						</li>
						<li>
							<NavLink to="/dashboard/booking" className="mb-2">
								<FaCalendarCheck /> my booking
							</NavLink>
						</li>
					</>
				)}

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
