import { Link } from "react-router-dom";

const BomsCard = ({ bom, onDeleteBom }) => {
	const { name, description } = bom;

	const handleDeleteBom = () => {
		fetch(`/boms/${name}`, {
			method: "DELETE",
		});
		onDeleteBom(bom);
	};

	return (
		<tr>
			<td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
				<div className="inline-flex items-center gap-x-3">
					<span>{name}</span>
				</div>
			</td>
			<td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
				{description}
			</td>

			<td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
				<Link
					to={`/boms/${name}`}
					className="inline-flex items-center px-3 py-1 mx-1 rounded-md gap-x-2 text-gray-300 bg-emerald-100/60 dark:bg-gray-800 text-sm font-normal capitalize"
				>
					View
				</Link>
				<button
					onClick={handleDeleteBom}
					className="inline-flex items-center px-3 py-1 mx-1 rounded-md gap-x-2 text-gray-300 bg-emerald-100/60 dark:bg-gray-800 text-sm font-normal capitalize"
				>
					Delete
				</button>
			</td>
		</tr>
	);
};

export default BomsCard;
