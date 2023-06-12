import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormNewProject = () => {
  const initialValues = {
		name: "",
		description: "",
		is_active: true,
    budget: "",
	};

  const [formData, setFormData] = useState(initialValues)
  const {name, description, is_active, budget} = formData
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
		fetch("/projects", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(formData),
		}).then((res) => {
			if (res.ok) {
				res.json().then((newUser) => {
					console.log(newUser);
          setFormData(initialValues);
          setErrors("")
          navigate('/projects')
				});
			} else {res.json().then((errorMsg) =>
        setErrors((errorMsg.errors)))
    }
  });
  };

  const renderErrors = errors ?  <h1 className="mt-2 text-red-500">{errors}: All fields Requiered, Budget must be higher than $0</h1> : null

  return (
<section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
			<h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
				New Project Form
			</h2>

			<form onSubmit={handleSubmit}>
				<div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
					<div>
						<label
							className="text-gray-700 dark:text-gray-200"
						>
							Project Name
						</label>
						<input
							id="name"
							type="text"
							className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
							value={name}
							onChange={(e) => {
								setFormData({
									...formData,
									name: e.target.value,
								});
							}}
						/>
					</div>
					<div>
						<label
							className="text-gray-700 dark:text-gray-200"
						>
							Description
						</label>
						<input
							id="desc"
							type="text"
							className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
							value={description}
							onChange={(e) => {
								setFormData({
									...formData,
									description: e.target.value,
								});
							}}
						/>
					</div>
					<div>
						<label
							className="text-gray-700 dark:text-gray-200"
						>
							Status
						</label>
						<select
							id="status"
							type="text"
							className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
							value={is_active}
							onChange={(e) => {
								setFormData({
									...formData,
									is_active: true,
								});
							}}
						>
              <option value={true}> Active </option>
            </select>
					</div>
					<div>
						<label
							className="text-gray-700 dark:text-gray-200"
						>
							Budget
						</label>
						<input
							id="email"
							type="text"
							className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
							value={budget}
							onChange={(e) => {
								setFormData({
									...formData,
									budget: e.target.value,
								});
							}}
						/>
					</div>
				</div>
				<div className="flex justify-end mt-6">
					<button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
						Submit
					</button>
				</div>
        {renderErrors}
			</form>
		</section>
  )
}

export default FormNewProject