import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PoCard from "./PoCard";
import _ from "lodash";

const PoList = () => {
	const [pos, setPos] = useState([]);
	// console.log(pos)

	useEffect(() => {
		fetch(`/pos`)
			.then((res) => res.json())
			.then((poData) => setPos(_.uniqBy(poData, "po_number")));
	}, []);

	const onDeletePo = (deletedPo) => {
		const posAfterDelete = pos.filter((po) => {
			if (po.id !== deletedPo.id) {
				return po;
			}
		});
		setPos(posAfterDelete);
	};
	// const poNum = _.uniq(pos.map(po => po.po_number))
	// console.log(poNum)
	const renderPos = pos.map((po) => (
		<PoCard key={po.id} po={po} onDeletePo={onDeletePo} />
	));

	return (
		<>
			{" "}
			<Link
				to="/pos/new"
				className="inline-flex items-center px-3 py-1 mx-1 rounded-md gap-x-2 text-gray-300 bg-emerald-100/60 dark:bg-gray-800 text-sm font-normal capitalize"
			>
				New PO Form
			</Link>
			<section className="container px-4 mx-auto mt-5">
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
												PO Number
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
										{/* <FormNewBom /> */}
										{renderPos}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default PoList;
