import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import _ from "lodash";

import PoDetailRow from "./PoDetailRow";

const PoDetails = () => {
	const { po_number } = useParams();
	const [poDetails, setPoDetails] = useState([]);
	// console.log(poDetails);

	useEffect(() => {
		fetch(`/pos/${po_number}`).then((res) => {
			if (res.ok) {
				res.json().then((poDetails) => setPoDetails(poDetails));
			}
		});
	}, []);

	const updateDeletedItem = (deletedItem) => {
		const filterDeletedItem = poDetails.filter((poDetails) =>
			poDetails.id === deletedItem.id ? null : poDetails
		);
		setPoDetails(filterDeletedItem);
	};

	const renderPoRow = poDetails.map((po) => (
		<PoDetailRow key={po.id} po={po} updateDeletedItem={updateDeletedItem} />
	));

	return (
		<section className="container px-4 mx-auto mt-5">
			PO Number: {po_number}
			<div className="flex flex-col">
				<div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
						<div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
							<table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
								<thead className="bg-gray-50 dark:bg-gray-800">
									<tr>
										<th
											scope="col"
											className="px-4 py-3.5 text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400"
										>
											Item ID #
										</th>

										<th
											scope="col"
											className="px-4 py-3.5 text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400"
										>
											Item Qty.
										</th>

										<th
											scope="col"
											className="px-4 py-3.5 text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400"
										>
											Actions
										</th>
									</tr>
								</thead>
								<tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
									{renderPoRow}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
      <div></div>
			<Link to="/pos" className="inline-flex px-3 py-1 mx-1 mt-5 rounded-md gap-x-2 text-gray-300 bg-emerald-100/60 dark:bg-gray-600 text-sm font-normal capitalize">
			Back to POs
			</Link>
		</section>
	);
};

export default PoDetails;
