import _ from 'lodash'
import { Link } from 'react-router-dom'

const PoCard = ({po, onDeletePo}) => {
  const {po_number} = po

  if(!po) return <h1>Loading...</h1>

  const handleDeletePo = () => {
		fetch(`/pos/${po_number}`, {
			method: "DELETE",
		});
		onDeletePo(po);
	};


  return (
    <tr>
    <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
      <div className="inline-flex items-center gap-x-3">
        <span>{po_number}</span>
      </div>
    </td>
    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
      <Link to={`/pos/${po_number}`}>
        <button className="inline-flex items-center px-3 py-1 mx-1 rounded-md gap-x-2 text-gray-300 bg-emerald-100/60 dark:bg-gray-800 text-sm font-normal capitalize">
          View Details
        </button>
      </Link>
      <button
        onClick={handleDeletePo}
        className="inline-flex items-center px-3 py-1 mx-1 rounded-md gap-x-2 text-gray-300 bg-emerald-100/60 dark:bg-red-800 text-sm font-normal capitalize"
      >
        Delete
      </button>
    </td>
  </tr>
  )
}

export default PoCard