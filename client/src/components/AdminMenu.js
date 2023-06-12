import { NavLink } from "react-router-dom";

const AdminMenu = () => {

  return (
		<>
			<NavLink to="/users/new" className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">Add New User</NavLink>
			<NavLink to="/projects/new" className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">Add New Project</NavLink>
		</>
  )
}

export default AdminMenu;