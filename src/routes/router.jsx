import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "./../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Shop from "../pages/Shop/Shop";
import Login from "../pages/Login/Login";
const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/menu",
				element: <Menu />,
			},
			{
				path: "/shop/:category",
				element: <Shop />,
			},
			{
				path: "/login",
				element: <Login />,
			},
		],
	},
]);

export default router;
