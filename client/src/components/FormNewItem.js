import _ from "lodash";
import { useState } from "react";

const FormNewItem = ({onAddNewItem}) => {
	const initialValues = {
		description: "",
		material: "",
		price: "",
		vendor: "",
	};
	const [formData, setFormData] = useState(initialValues);
	const [errors, setErrors] = useState("");

	const { description, material, price, vendor } = formData;

	const handleNewItem = (e) => {
		e.preventDefault();
		// console.log(formData);
    if(!description) return setErrors("Description required")
    if(!material) return setErrors("Material required")
    if(!vendor) return setErrors("Vendor required")
    if(price === 0 || !price ) return setErrors("Price must be greater than zero")

		fetch("/items", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(formData),
		}).then(res => {
			if (res.ok) {
				res.json().then((newItem) => {
					// console.log(newItem);
          onAddNewItem(newItem)
					setErrors("");
					setFormData(initialValues);
        })}})}
    

	const renderErrors = errors ? (
		<h1 className="mt-2 text-red-500">{errors}</h1>
	) : null;

	return (
		<tr className="bg-gray-800">
			<td className="px-4 text-sm text-gray-700 dark:text-gray-200 whitespace-nowrap"></td>
			<td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
				<input
					id="title"
					type="text"
					className="inline-flex items-center w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
					value={description}
					onChange={(e) => {
						setFormData({
							...formData,
							description: e.target.value,
						});
					}}
				/>
			</td>
			<td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
				<input
					id="title"
					type="text"
					className="inline-flex items-center w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
					value={material}
					onChange={(e) => {
						setFormData({ ...formData, material: e.target.value });
					}}
				/>
			</td>
			<td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
				<input
					id="title"
					type="text"
					className="inline-flex items-center w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
					value={price}
					onChange={(e) => {
						setFormData({ ...formData, price: e.target.value });
					}}
				/>
			</td>
			<td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
				<input
					id="title"
					type="text"
					className="inline-flex items-center w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
					value={vendor}
					onChange={(e) => {
						setFormData({ ...formData, vendor: e.target.value });
					}}
				/>
			</td>
			<td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
				<button
					onClick={handleNewItem}
					className="inline-flex items-center px-3 py-1 mx-1 rounded-md gap-x-2 text-gray-300 bg-emerald-100/60 dark:bg-green-800 text-sm font-normal capitalize"
				>
					Add New Item
				</button>
				{renderErrors}
			</td>
		</tr>
	);
};

export default FormNewItem;
