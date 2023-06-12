import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProjectRow = ({ project, onDeleteProject }) => {
	// console.log(project);
	const { id, name, budget, is_active } = project;
  const navigate = useNavigate()

  const handleDeleteProject = () => {
    fetch(`/projects/${id}`, {
    method: 'DELETE',
    })
        onDeleteProject(project.id)

      }

	return (
		<tr>
			<td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
				<div className="inline-flex items-center gap-x-3">
					<span>{id}</span>
				</div>
			</td>
			<td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
				{name}
			</td>
			<td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
				<div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
					<h2 className="text-sm font-normal capitalize">
						{is_active ? "Active" : "Completed"}
					</h2>
				</div>
			</td>
			<td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
				<div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
					<h2 className="text-sm font-normal capitalize">{""}</h2>
				</div>
			</td>
			<td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
				<div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
					<h2 className="text-sm font-normal capitalize ">{budget}</h2>
				</div>
			</td>
			<td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
				<Link to={`/projects/${id}`}>
					<button className="inline-flex items-center px-3 py-1 mx-1 rounded-md gap-x-2 text-gray-300 bg-emerald-100/60 dark:bg-gray-800 text-sm font-normal capitalize">
						View
					</button>
				</Link>
					<button onClick={handleDeleteProject} className="inline-flex items-center px-3 py-1 mx-1 rounded-md gap-x-2 text-gray-300 bg-emerald-100/60 dark:bg-red-800 text-sm font-normal capitalize">
						Delete
					</button>
			</td>
		</tr>
	);
};

export default ProjectRow;
