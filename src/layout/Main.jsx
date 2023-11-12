import { Outlet } from "react-router-dom";
import Header from "../pages/shared/Header";
import Footer from "../pages/shared/Footer";
const Main = () => {
	return (
		<div>
			<div className="max-w-7xl mx-auto">
				<Header />
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default Main;
