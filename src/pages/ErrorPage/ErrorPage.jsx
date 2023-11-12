import { Link } from "react-router-dom";
const ErrorPage = () => {
	return (
		<div>
			<h1 className="text-3xl text-center font-bold">404 Error</h1>
			<h2 className="text-xl text-center font-semibold">
				This page is not found
			</h2>
			<Link to="/">
				<button className="btn btn-primary mx-auto block">Go Home</button>
			</Link>
		</div>
	);
};

export default ErrorPage;
