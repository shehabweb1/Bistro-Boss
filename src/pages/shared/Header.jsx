import { Link, NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { BsCart4 } from "react-icons/bs";
import useAuth from "../../hooks/useAuth";

const Header = () => {
	const { user, logOut } = useAuth();
	const navigate = useNavigate();

	const handleLogOut = () => {
		logOut().then(() => {
			Swal.fire({
				title: "Successfully",
				text: "Your Account has been Sign Out!",
				icon: "success",
			});
			navigate("/");
		});
	};

	const navItem = (
		<>
			<li>
				<NavLink to="/">Home</NavLink>
			</li>
			<li>
				<NavLink to="/contact">contact us</NavLink>
			</li>
			<li>
				<NavLink to="/dashboard">DASHBOARD</NavLink>
			</li>
			<li>
				<NavLink to="/menu">our menu</NavLink>
			</li>
			<li>
				<NavLink to="/shop/salad">our shop</NavLink>
			</li>
			{user ? (
				<>
					<li>
						<button className="m-0 px-0 py-1">
							<BsCart4 className="text-[28px] p-[2px] bg-green-800 rounded-full  border border-yellow-600" />
							<div className="text-[12px] -mb-4 -ml-4 bg-red-700 text-center px-[2px] rounded-full">
								0
							</div>
						</button>
					</li>
					<li>
						<div className="avatar">
							<button onClick={handleLogOut}>SIGN OUT</button>
							<div className="w-6 rounded-full">
								<img src={user?.photoURL} />
							</div>
						</div>
					</li>
				</>
			) : (
				<>
					<li>
						<NavLink to="/login">Login</NavLink>
					</li>
				</>
			)}
		</>
	);
	return (
		<div className="navbar max-w-7xl fixed bg-black bg-opacity-30 z-10 text-white">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-md uppercase dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
					>
						{navItem}
					</ul>
				</div>
				<Link to="/" className="normal-case text-xl">
					<div className="flex flex-col">
						<h2 className="text-3xl font-bold">BISTRO BOSS</h2>
						<h4 className="text-xl" style={{ letterSpacing: "0.5em" }}>
							Restaurant
						</h4>
					</div>
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu uppercase menu-horizontal px-1">{navItem}</ul>
			</div>
		</div>
	);
};

export default Header;
