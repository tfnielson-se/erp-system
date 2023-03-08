import { NavLink } from "react-router-dom";
const Menu = ({ currentUser }) => {

  return (
		<>
			<NavLink to={`/users/${currentUser.id}`} className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">My Profile</NavLink>
			<NavLink to={`/users/${currentUser.id}/projects`} className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">
				My Projects
			</NavLink>
      <NavLink to={`/boms`} className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">
				Boms
			</NavLink>
      <NavLink to={`/items`} className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">
				Items
			</NavLink>
      <NavLink to={`/Pos`} className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">
				POs
			</NavLink>
		</>
  )
}

export default Menu;