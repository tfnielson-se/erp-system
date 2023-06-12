import { useState } from "react";
import { Link } from "react-router-dom";

const BomsDetailRow = ({
	bom,
	projects,
	updateBomItems,
	updateDeletedItem,
}) => {
	const [bomRow, setBomRow] = useState(bom);
	const { id, name, item_id, item_qty } = bom;
	const [itemQty, setItemQty] = useState(item_qty);
	console.log(bom);

	const handleIncreaseQty = () => {
		// console.log('click')
		setItemQty((itemQty) => (itemQty += 1));
		fetch(`/boms/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ item_qty: itemQty + 1 }),
		})
			.then((res) => res.json())
			.then((updatedItem) => setBomRow(updatedItem));
	};

	const handleDecreaseQty = () => {
		// console.log('click')
		setItemQty((itemQty) => (itemQty -= 1));
		fetch(`/boms/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ item_qty: itemQty - 1 }),
		})
			.then((res) => res.json())
			.then((updatedItem) => setBomRow(updatedItem));
	};

	const handleDeleteItems = () => {
		console.log("click");
		fetch(`/boms/${id}`, {
			method: "DELETE",
		});
		updateDeletedItem(bom);
	};

	if (bom.item_qty === null) return null;
	return (
		<tr>
			<td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
				<div className="inline-flex items-center gap-x-3">
					<span>{item_id}</span>
				</div>
			</td>
			<td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
				{itemQty}
			</td>
			<td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
				<button
					onClick={handleIncreaseQty}
					className="inline-flex items-center px-3 py-1 rounded-md gap-x-2 mx-1 text-gray-300 bg-emerald-100/60 dark:bg-green-800 text-sm font-normal capitalize"
				>
					Add
				</button>
				<button
					onClick={handleDecreaseQty}
					className="inline-flex items-center px-3 py-1 rounded-md gap-x-2 text-gray-300 mx-1 bg-emerald-100/60 dark:bg-yellow-800 text-sm font-normal capitalize"
				>
					Subtract
				</button>
				<button
					onClick={handleDeleteItems}
					className="inline-flex items-center px-3 py-1 rounded-md gap-x-2 text-gray-300 mx-1 bg-emerald-100/60 dark:bg-red-800 text-sm font-normal capitalize"
				>
					Remove
				</button>
			</td>
		</tr>
	);
};

export default BomsDetailRow;
