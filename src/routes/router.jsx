import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "./../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Shop from "../pages/Shop/Shop";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Contact from "../pages/Contact/Contact";
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
				path: "contact",
				element: <Contact />,
			},
			{
				path: "menu",
				element: <Menu />,
			},
			{
				path: "shop/:category",
				element: <Shop />,
			},
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "signUp",
				element: <SignUp />,
			},
		],
	},
]);

export default router;
