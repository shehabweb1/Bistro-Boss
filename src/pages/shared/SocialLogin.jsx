import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = () => {
	const { loginWithGoogle } = useAuth();
	const axiosPublic = useAxiosPublic();
	const navigate = useNavigate();

	const handleGoogleLogin = () => {
		loginWithGoogle().then((result) => {
			if (result) {
				const userData = {
					name: result.user?.displayName,
					email: result.user?.email,
				};
				axiosPublic.post("/users", userData).then((res) => {
					if (res) {
						Swal.fire({
							title: "Successfully",
							text: "Your account has been logged!",
							icon: "success",
						});
						navigate("/");
					}
				});
			}
		});
	};
	return (
		<>
			<button
				className="btn btn-neutral flex items-center mx-auto my-3"
				onClick={handleGoogleLogin}
			>
				<FaGoogle className="text-xl" />
				Google
			</button>
		</>
	);
};

export default SocialLogin;
