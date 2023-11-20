import { Outlet } from "react-router-dom";
import Sidebar from "../pages/shared/Sidebar";
import { FaBars } from "react-icons/fa";

const Admin = () => {
	return (
		<div className="drawer lg:drawer-open">
			<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
			<label htmlFor="my-drawer-2" className="btn btn-ghost lg:hidden">
				<FaBars className="text-3xl" />
			</label>
			<div className="drawer-content p-5">
				<Outlet />
			</div>
			<Sidebar />
		</div>
	);
};

export default Admin;
