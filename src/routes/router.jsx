import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "./../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Shop from "../pages/Shop/Shop";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Contact from "../pages/Contact/Contact";
import Admin from "../layout/Admin";
import AdminHome from "../pages/Dashboard/Admin/AdminHome";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import ManageBooking from "../pages/Dashboard/ManageBooking/ManageBooking";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
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
	{
		path: "admin",
		element: <Admin />,
		children: [
			{
				path: "home",
				element: <AdminHome />,
			},
			{
				path: "addItems",
				element: <AddItems />,
			},
			{
				path: "manageItems",
				element: <ManageItems />,
			},
			{
				path: "manageBooking",
				element: <ManageBooking />,
			},
			{
				path: "allUsers",
				element: <AllUsers />,
			},
		],
	},
]);

export default router;
