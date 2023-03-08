import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AdminMenu from "./AdminMenu";
import Menu from "./Menu";
// import Login from "./Login";

const NavBar = ({ updateCurrentUser, currentUser }) => {
	const navigate = useNavigate();

	function handleLogout() {
		// console.log("click");
		fetch("/logout", {
			method: "DELETE",
		}).then((res) => {
			if (res.ok) {
				updateCurrentUser(false);
				navigate("/login");
			}
		});
	}

	const displayAdminMenu =
		currentUser.is_admin ? (
			<>
				<AdminMenu currentUser={currentUser} />{" "}
				<Menu currentUser={currentUser} />{" "}
			</>
		) : currentUser.is_active ? <Menu currentUser={currentUser} /> : null

	return (
		<div className="container px-4 mx-auto my-5 ">
			<nav className="navbar flex justify-between rounded-lg bg-white shadow dark:bg-gray-500">
				<div className="navbar-item pl-2 text-gray-900 capitalize dark:text-gray-800">
					<Link to="/">
						<h2 className="border-b-2 border-transparent transition-colors duration-300 transform text-gray-200 hover:border-green-300 mx-1.5 sm:mx-6 text-2xl">
							ERP System
						</h2>
					</Link>
				</div>
				<div>{displayAdminMenu}</div>
				<div>
					<p className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 border-yellow-500 mx-1.5 sm:mx-6">
						{currentUser ? (
							<button onClick={handleLogout}>Logout</button>
						) : (
							<span>Please Login</span>
						)}
					</p>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
