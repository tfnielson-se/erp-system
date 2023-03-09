import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const ItemsRow = ({item, onDeleteItem}) => {
  const {id, description, material, price, vendor} = item

  const handleDeleteItem = () => {
    fetch(`/items/${id}`, {
    method: 'DELETE',
    })
        onDeleteItem(item.id)

      }

    const handleEdit = () => {
      console.log('click')
    }

  return (
		<tr>
			<td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
				<div className="inline-flex items-center gap-x-3">
					<span>{id}</span>
				</div>
			</td>
			<td onDoubleClick={handleEdit} className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
				{description}
			</td>
			<td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
				<div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
					<h2 className="text-sm font-normal capitalize">
						{material}
					</h2>
				</div>
			</td>
			<td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
				<div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
					<h2 className="text-sm font-normal capitalize">{price}</h2>
				</div>
			</td>
			<td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
				<div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
					<h2 className="text-sm font-normal capitalize">{vendor}</h2>
				</div>
			</td>
			<td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
				<Link to={`/items/${id}`}>
					<button className="inline-flex items-center px-3 py-1 mx-1 rounded-md gap-x-2 text-gray-300 bg-emerald-100/60 dark:bg-gray-800 text-sm font-normal capitalize">
						Edit
					</button>
				</Link>
					<button onClick={handleDeleteItem} className="inline-flex items-center px-3 py-1 rounded-md gap-x-2 mx-1 text-gray-300 bg-emerald-100/60 dark:bg-red-800 text-sm font-normal capitalize">
						Delete
					</button>
			</td>
		</tr>
  )
}

export default ItemsRow;