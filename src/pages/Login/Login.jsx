import { useEffect } from "react";
import Swal from "sweetalert2";
import loginBg from "../../assets/others/authentication2.png";
import {
	loadCaptchaEnginge,
	LoadCanvasTemplate,
	validateCaptcha,
} from "react-simple-captcha";
import { Helmet } from "react-helmet-async";

const Login = () => {
	useEffect(() => {
		loadCaptchaEnginge(6);
	}, []);
	const handleLogin = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		const captcha = form.captcha.value;
		if (validateCaptcha(captcha)) {
			console.log(email, password);
			Swal.fire({
				title: "Good job!",
				text: "Your Login is Successful!",
				icon: "success",
			});
		} else {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Invalid Captcha!",
			});
			form.captcha.value = "";
		}
	};

	return (
		<>
			<Helmet>
				<title>Bistro Boss | Login</title>
			</Helmet>
			<div className="hero mx-auto m-5 md:my-20 p-10 md:p-20 bg-base-200">
				<div className="hero-content flex-col lg:flex-row">
					<div className="text-center lg:w-1/2 lg:text-left">
						<img src={loginBg} alt="Login BG" />
					</div>
					<div className="card lg:w-1/2 w-full max-w-md shadow-2xl bg-base-100">
						<form onSubmit={handleLogin} className="card-body">
							<h1 className="text-4xl font-bold text-center">Login</h1>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									type="email"
									name="email"
									placeholder="email"
									className="input input-bordered"
									required
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input
									type="password"
									name="password"
									placeholder="password"
									className="input input-bordered"
									required
								/>
								<label className="label">
									<a href="#" className="label-text-alt link link-hover">
										Forgot password?
									</a>
								</label>
							</div>
							<div className="form-control">
								<label className="label">
									<LoadCanvasTemplate />
								</label>
								<input
									type="text"
									name="captcha"
									placeholder="Enter the valid captcha"
									className="input input-bordered"
									required
								/>
							</div>
							<div className="form-control mt-6">
								<input
									type="submit"
									value="Login"
									className="btn btn-primary"
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
