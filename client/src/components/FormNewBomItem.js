import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const FormNewBomItem = ({}) => {
  const {name} = useParams()
	const initialValue = {
    name: name,
		item: "",
		item_qty: "",
	};
  
	const [formData, setFormData] = useState(initialValue);
  const [formErrors, setFormErrors] = useState("");

	const { item, item_qty } = formData;
  const navigate = useNavigate()

	const handleNewBomItem = (e) => {
		e.preventDefault();
		console.log(formData);
		fetch(`/boms/${name}`, {
			method: 'PATCH',
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(formData),
		}).then((res) => {
			if (res.ok) {
				res.json().then((newItem) => {
					console.log(newItem);
					setFormErrors("");
				});
			} else {
				setFormErrors("");
			}
		});
	};
  if(formErrors) return <h1>{formErrors}</h1>
	return (
		<tr className="bg-gray-800">
			<td className="px-4 text-sm text-gray-700 dark:text-gray-200 whitespace-nowrap">
				<input
					id="title"
					type="text"
					className="inline-flex items-center px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring uppercase"
					value={item}
					onChange={(e) => {setFormData({...formData, item: e.target.value})}}
				/>
			</td>
			<td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
				<input
					id="title"
					type="text"
					className="inline-flex items-center w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
					value={item_qty}
					onChange={(e) => {setFormData({...formData, item_qty: e.target.value})}}
				/>
			</td>
			<td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
				<button
					onClick={handleNewBomItem}
					className="inline-flex items-center px-3 py-1 mx-1 rounded-md gap-x-2 text-gray-300 bg-emerald-100/60 dark:bg-green-800 text-sm font-normal capitalize"
				>
					Submit
				</button>
			</td>
		</tr>
	);
};

export default FormNewBomItem;
