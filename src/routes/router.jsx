import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "./../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Shop from "../pages/Shop/Shop";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Contact from "../pages/Contact/Contact";
import Dashboard from "../layout/Dashboard";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import Reservation from "../pages/Dashboard/Reservation/Reservation";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import Cart from "../pages/Dashboard/Cart/Cart";
import AddReview from "../pages/Dashboard/AddReview/AddReview";
import Booking from "./../pages/Dashboard/Booking/Booking";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import PrivateRoute from "./PrivateRoute";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "./../pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../pages/Dashboard/Payment/Payment";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";

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
		path: "dashboard",
		element: (
			<PrivateRoute>
				<Dashboard />
			</PrivateRoute>
		),
		children: [
			{
				path: "home",
				element: <UserHome />,
			},
			{
				path: "reservation",
				element: <Reservation />,
			},
			{
				path: "paymentHistory",
				element: <PaymentHistory />,
			},
			{
				path: "cart",
				element: <Cart />,
			},
			{
				path: "cart/payment",
				element: <Payment />,
			},
			{
				path: "addReview",
				element: <AddReview />,
			},
			{
				path: "booking",
				element: <Booking />,
			},
			{
				path: "allUsers",
				element: (
					<AdminRoute>
						<AllUsers />
					</AdminRoute>
				),
			},
			{
				path: "adminHome",
				element: (
					<AdminRoute>
						<AdminHome />
					</AdminRoute>
				),
			},
			{
				path: "addItems",
				element: (
					<AdminRoute>
						<AddItems />
					</AdminRoute>
				),
			},
			{
				path: "manageItems",
				element: (
					<AdminRoute>
						<ManageItems />
					</AdminRoute>
				),
			},
			{
				path: "manageItems/:id",
				element: (
					<AdminRoute>
						<UpdateItem />
					</AdminRoute>
				),
				loader: ({ params }) =>
					fetch(`http://localhost:3000/menu/${params.id}`),
			},
		],
	},
]);

export default router;
