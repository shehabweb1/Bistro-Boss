import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import signUpBg from "../../assets/others/authentication2.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
	const { createUser, userUpdate, loginWithGoogle } = useContext(AuthContext);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const navigate = useNavigate();

	const onSubmit = (data) => {
		console.log(data);
		createUser(data.email, data.password)
			.then((result) => {
				if (result) {
					userUpdate(data.name, data.photo)
						.then(() => {
							Swal.fire({
								title: "Successfully",
								text: "Your Account has been created Successfully!",
								icon: "success",
							});
							navigate("/");
						})
						.catch((error) => {
							console.log(error.message);
						});
				}
			})
			.catch((error) => {
				console.log(error.message);
			});
	};

	const handleGoogleLogin = () => {
		loginWithGoogle().then((result) => {
			if (result) {
				Swal.fire({
					title: "Successfully",
					text: "Your Account has been created Successfully!",
					icon: "success",
				});
				navigate("/");
			}
		});
	};

	return (
		<>
			<Helmet>
				<title>Bistro Boss | Sign Up</title>
			</Helmet>
			<div className="hero mx-auto m-5 md:my-20 p-10 md:p-20 bg-base-200">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<div className="text-center lg:w-1/2 lg:text-left">
						<img src={signUpBg} alt="Login BG" />
					</div>
					<div className="card lg:w-1/2 w-full max-w-md shadow-2xl bg-base-100">
						<form onSubmit={handleSubmit(onSubmit)} className="card-body">
							<h1 className="text-4xl font-bold text-center">Sign Up</h1>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Name</span>
								</label>
								<input
									type="text"
									{...register("name", { required: true })}
									name="name"
									placeholder="name"
									className="input input-bordered"
								/>
								{errors.name && (
									<p className="text-red-600">Write your valid name</p>
								)}
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Photo URL</span>
								</label>
								<input
									type="text"
									{...register("photo", { required: true })}
									name="photo"
									placeholder="photo url"
									className="input input-bordered"
								/>
								{errors.photo && (
									<p className="text-red-600">Enter your valid photo url</p>
								)}
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									type="email"
									{...register("email", { required: true })}
									name="email"
									placeholder="email"
									className="input input-bordered"
								/>
								{errors.email && (
									<p className="text-red-600">Enter your valid email</p>
								)}
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input
									type="password"
									{...register("password", {
										required: true,
										minLength: 6,
										pattern: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/,
									})}
									name="password"
									placeholder="password"
									className="input input-bordered"
								/>
								{errors.password?.type === "required" && (
									<p className="text-red-600">Enter your valid password</p>
								)}
								{errors.password?.type === "minLength" && (
									<p className="text-red-600">Enter minimum 6 character</p>
								)}
								{errors.password?.type === "pattern" && (
									<p className="text-red-600">Enter one uppercase letter</p>
								)}
							</div>
							<div className="form-control mt-6">
								<input
									type="submit"
									value="Sign Up"
									className="btn btn-warning"
								/>
							</div>
						</form>
						<p className="text-yellow-600 text-center">
							Already registered? <Link to="/login">Go to log in</Link>
						</p>
						<p className="my-3 text-lg text-center">Or sign up with</p>
						<button
							className="btn btn-primary w-1/4 mx-auto my-3"
							onClick={handleGoogleLogin}
						>
							Google
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default SignUp;
