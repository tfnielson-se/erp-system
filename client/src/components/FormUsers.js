import { ErrorResponse } from "@remix-run/router";
import { useState } from "react";

const FormUsers = ({ onAddNewUser }) => {
	let initialValues = {
		first_name: "",
		last_name: "",
		email: "",
		password: "",
		passwordConfirmation: "",
		title: "",
		is_active: true,
		is_admin: false,
	};
	const [formData, setFormData] = useState(initialValues);
	const [formErrors, setFormErrors] = useState("");
	const {
		first_name,
		last_name,
		email,
		password,
		passwordConfirmation,
		title,
		is_active,
		is_admin,
	} = formData;

	// NEED TO FIX DISPLAY OF ERRORS
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
		fetch("/users", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(formData),
		}).then((res) => {
			if (res.ok) {
				res.json().then((newUser) => {
					console.log(newUser);
					setFormErrors("");
				});
			} else {
				setFormErrors("");
			}
		});
	};

	return (
		<section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
			<h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
				New User Account
			</h2>

			<form onSubmit={handleSubmit}>
				<div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
					<div>
						<label
							className="text-gray-700 dark:text-gray-200"
						>
							Title
						</label>
						<input
							id="title"
							type="text"
							className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
							value={title}
							onChange={(e) => {
								setFormData({
									...title,
									title: e.target.value,
								});
							}}
						/>
					</div>
					<div>
						<label
							className="text-gray-700 dark:text-gray-200"
						>
							First Name
						</label>
						<input
							id="first-name"
							type="text"
							className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
							value={first_name}
							onChange={(e) => {
								setFormData({
									...formData,
									first_name: e.target.value,
								});
							}}
						/>
					</div>
					<div>
						<label
							className="text-gray-700 dark:text-gray-200"
							for="username"
						>
							Last Name
						</label>
						<input
							id="last-name"
							type="text"
							className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
							value={last_name}
							onChange={(e) => {
								setFormData({
									...formData,
									last_name: e.target.value,
								});
							}}
						/>
					</div>
					<div>
						<label
							className="text-gray-700 dark:text-gray-200"
						>
							Email
						</label>
						<input
							id="email"
							type="text"
							className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
							value={email}
							onChange={(e) => {
								setFormData({
									...formData,
									email: e.target.value,
								});
							}}
						/>
					</div>
					<div>
						<label
							className="text-gray-700 dark:text-gray-200"
						>
							Password
						</label>
						<input
							id="password"
							type="password"
							className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
							value={password}
							onChange={(e) => {
								setFormData({
									...formData,
									password: e.target.value,
								});
							}}
						/>
					</div>

					<div>
						<label
							className="text-gray-700 dark:text-gray-200"
						>
							Password Confirmation
						</label>
						<input
							id="passwordConfirmation"
							type="password"
							className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
							value={passwordConfirmation}
							onChange={(e) => {
								setFormData({
									...formData,
									passwordConfirmation: e.target.value,
								});
							}}
						/>
					</div>
				</div>
				<div className="flex justify-end py-3">
					<span className="text-gray-700 dark:text-gray-200 px-3">
						<label>Admin: </label>
						<input
							type="checkbox"
							name="is_admin"
							value={is_admin}
							onChange={() => {
								setFormData({
									...formData,
									is_admin: !is_admin,
								});
							}}
						/>
					</span>
				</div>
				<div className="flex justify-end mt-6">
					<button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
						Submit
					</button>
				</div>
			</form>
		</section>
	);
};

export default FormUsers;
