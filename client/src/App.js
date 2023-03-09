////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
//  TODO
// 1. Projects CRUD
// // Create - ✅
// // Read - ✅
// // Update -
// // Delete - ✅
// 2. User CRUD
// // Create - ✅
// // Read - ✅
// // Update -
// // Delete -
// 3. BOMs page
// // Create - ✅
// // Read - ✅
// // Update - ✅ - needs more work after create
// // Delete - ✅
// 4. POs page -- revise
// // Create
// // Read
// // Update
// // Delete
// 5. Items page
// // Create - ✅
// // Read - ✅
// // Update
// // Delete - ✅
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Login from "./components/Login";

import UserProfile from "./components/UserProfile";
import FormUsers from "./components/FormUsers";

import MyProjectsList from "./components/MyProjectsList";
import ProjectsList from "./components/ProjectsList";
import ProjectDetails from "./components/ProjectDetails";
import FormNewProject from "./components/FormNewProject";

import BomsList from "./components/BomsList";
import BomsDetails from "./components/BomsDetail";

import ItemsList from "./components/ItemsList";
import PoList from "./components/PoList";
// import _ from "lodash";
import "./App.css";

function App() {
	const [users, setUsers] = useState([]);
	const [currentUser, setCurrentUser] = useState(false);
	const [errors, setErrors] = useState(false);

	// console.log("current", currentUser);
	// console.log("users", users)
	useEffect(() => {
		fetch("/authorized").then((res) => {
			if (res.ok) {
				res.json().then((user) => {
					updateCurrentUser(user);
					fetchUsers();
				});
			}
		});
	}, []);

	const fetchUsers = () => {
		fetch("/users").then((res) => {
			if (res.ok) {
				res.json().then((usersData) => setUsers(usersData));
			}
		});
	};
	// console.log(users)
	const updateCurrentUser = (user) => {
		setCurrentUser(user);
		fetchUsers();
	};

	const onAddNewUser = (newUser) => {
		setUsers([...users, newUser]);
	};

	if (errors) return <h1>{errors}</h1>;
	return (
		<div>
			<NavBar
				currentUser={currentUser}
				updateCurrentUser={updateCurrentUser}
			/>
			<Routes>
				<Route
					path="/"
					element={
						<Home
							currentUser={currentUser}
							updateCurrentUser={updateCurrentUser}
						/>
					}
				/>
				<Route
					path="/users/new"
					element={<FormUsers onAddNewUser={onAddNewUser} />}
				/>
				<Route
					path="/users/:id"
					element={<UserProfile currentUser={currentUser} />}
				/>
				<Route
					path="/users/:id/projects"
					element={<MyProjectsList currentUser={currentUser} />}
				/>
				<Route path="/projects" element={<ProjectsList />} />
				<Route path="/projects/:id" element={<ProjectDetails />} />
				<Route path="/projects/new" element={<FormNewProject />} />
				<Route path="/boms" element={<BomsList />} />
				<Route path="/boms/:name" element={<BomsDetails />} />
				<Route path="/pos" element={<PoList />} />
				<Route path="/Items" element={<ItemsList />} />
				<Route
					path="/login"
					element={<Login updateCurrentUser={updateCurrentUser} />}
				/>
			</Routes>
		</div>
	);
}

export default App;
