import { Outlet, useLocation } from "react-router-dom";
import Header from "../pages/shared/Header";
import Footer from "../pages/shared/Footer";
const Main = () => {
	const location = useLocation();
	const noHeaderFooter = location.pathname.includes("login");
	return (
		<div>
			<div className="max-w-7xl mx-auto">
				{noHeaderFooter || <Header />}
				<Outlet />
			</div>
			{noHeaderFooter || <Footer />}
		</div>
	);
};

export default Main;
