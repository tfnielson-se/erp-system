import { useEffect, useState } from "react"
import _ from 'lodash'
import BomsCard from "./BomsCard"
import FormNewBom from "./FormNewBom"

const Bomslist = () => {
  const [boms, setBoms] = useState([])
// console.log(boms)

  useEffect(() => {
    fetch('/boms')
    .then(res => res.json())
    .then(bomsData => setBoms(_.uniqBy(bomsData, 'name')))
  },[])

  const onDeleteBom = (deletedBom) => {
      const bomsAfterDelete = boms.filter(bom => {
        if (bom.name !== deletedBom.name) {
          return bom
        }});
      setBoms(bomsAfterDelete)
    }

  const renderBomsCard = boms.map(bom => (
    <BomsCard key={bom.name} bom={bom} onDeleteBom={onDeleteBom} />
  ))


  return (
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
											Name
										</th>

										<th
											scope="col"
											className="px-4 py-3.5 text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400"
										>
											Description
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
                  <FormNewBom />
									{renderBomsCard}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</section>
  )
}

export default Bomslist