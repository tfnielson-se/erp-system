import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ updateCurrentUser }) {
	let initialValues = {
		email: "",
		password: "",
	};
	const [formLogin, setFormLogin] = useState(initialValues);
	const [errors, setErrors] = useState("");
	const navigate = useNavigate();
	const { email, password } = formLogin;

	function handleSubmit(e) {
		e.preventDefault();
		fetch("/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formLogin),
		}).then((res) => {
			if (res.ok) {
				res.json().then((user) => {
          updateCurrentUser(user)
					navigate("/");
				});
			} else {
				res.json().then((errorMsg) =>
					setErrors((errorMsg.error))
				);
			}
		});
	}
  const renderErrors = errors ?  <h1 className="mt-2 text-red-500">{errors}</h1> : null

	return (
		<div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
			<div className="hidden bg-cover lg:block lg:w-1/2">
				{" "}
				INSERT IMG{" "}
			</div>

			<div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
				<div className="flex justify-center mx-auto">
					<img className="w-auto h-7 sm:h-8" src="" alt="" />
				</div>

				<p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
					Welcome
				</p>

				<form onSubmit={handleSubmit}>
					<div className="flex items-center justify-between mt-4">
						<span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
						<span> Log in with Email</span>
						<span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
					</div>

					<div className="mt-4">
						<div className="flex justify-between">
							<label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
								Email Address
							</label>
						</div>
						<input
							id="LoggingEmailAddress"
							className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
							type="email"
							value={email}
							onChange={(e) =>
								setFormLogin({
									...formLogin,
									email: e.target.value,
								})
							}
						/>
					</div>

					<div className="mt-4">
						<div className="flex justify-between">
							<label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
								Password
							</label>
						</div>

						<input
							id="loggingPassword"
							className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
							type="password"
							value={password}
							onChange={(e) =>
								setFormLogin({
									...formLogin,
									password: e.target.value,
								})
							}
						/>
					</div>

					<div className="mt-6">
						<button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-500 rounded-lg hover:bg-teal-800 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
							Sign In
						</button>
					</div>
          {renderErrors}
				</form>
			</div>
		</div>
	);
}

export default Login;
