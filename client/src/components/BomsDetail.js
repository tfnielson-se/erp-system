import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import _ from "lodash";

import BomsDetailRow from "./BomsDetailRow";
import FormNewBomItem from "./FormNewBomItem";

const BomsDetails = () => {

	const { name } = useParams();
	const [bomDetails, setBomDetails] = useState([]);

	useEffect(() => {
		fetch(`/boms/${name}`).then((res) => {
			if (res.ok) {
				res.json().then((bomDetails) => setBomDetails(bomDetails));
			}
		});
	}, []);

	const updateDeletedItem = (deletedItem) => {
		const filterDeletedItem = bomDetails.filter((bomDetail) =>
			bomDetail.id === deletedItem.id ? null : bomDetail
		);
		setBomDetails(filterDeletedItem);
	};

	const description = _.uniq(
		bomDetails.map((bomDetails) => bomDetails.description)
	);

	// const projects = _.uniq(
	// 	bomDetails.map((bomDetails) => bomDetails.project)
	// ).join(", ");
	// console.log('proj',projects)

	const renderBomsRow = bomDetails.map((bom) => (
		<BomsDetailRow
			bom={bom}
			// projects={projects}
			// updateBomItems={updateBomItems}
			updateDeletedItem={updateDeletedItem}
		/>
	));

	return (
		<section className="container px-4 mx-auto mt-5">
			BOM Name: {name} / Description: {description}
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
                  <FormNewBomItem boms={bomDetails} />
									{renderBomsRow}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BomsDetails;
