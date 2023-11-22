import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({ children }) => {
	const [isAdmin, isAdminLoading] = useAdmin();
	const { user, loading } = useAuth();
	const location = useLocation();

	if (loading || isAdminLoading) {
		return <span className="loading loading-spinner text-warning"></span>;
	}

	if (user && isAdmin) {
		return children;
	}

	return <Navigate to="/" state={{ from: location }} replace />;
};

export default AdminRoute;
