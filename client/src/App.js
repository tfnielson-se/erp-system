////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
//  TODO
// 1. Projects CRUD
// // Create
// // Read - ✅
// // Update - mark as completed / inactiv
// // Delete - ✅
// 2. User CRUD
// // Create - needs validation & errors ✅
// // Read - me?
// // Update - update my profile
// // Delete - delete my project?
// 3. BOMs page -- revise
// // Create
// // Read - list of all
// // Update
// // Delete
// 4. POs page -- revise
// // Create
// // Read
// // Update
// // Delete
// 5. Items page -- revise
// // Create
// // Read
// // Update
// // Delete
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";
import FormUsers from "./components/FormUsers";
import ProjectList from "./components/ProjectsList";
import BomsList from "./components/BomsList";
import ItemsList from "./components/ItemsList";
import PoList from "./components/PoList";
// import _ from "lodash";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
	const [currentUser, setCurrentUser] = useState(false);
  const [errors, setErrors] = useState(false);

	console.log("current", currentUser);
	console.log("users", users)

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
  const updateCurrentUser = (user) => {setCurrentUser(user); fetchUsers();};

	const onAddNewUser = (newUser) => {
		setUsers([...users, newUser]);
	};
  

  if(errors) return <h1>{errors}</h1>
	return (
		<div>
			<NavBar currentUser={currentUser} updateCurrentUser={updateCurrentUser}/>
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
        <Route path='/users/:id/projects' element={<ProjectList currentUser={currentUser} />} />
        <Route path='/login' element={<Login updateCurrentUser={updateCurrentUser}/>} />
        <Route path='/Boms' element={<BomsList />} />
        <Route path='/Pos' element={<PoList />} />
        <Route path='/Items' element={<ItemsList />} />
			</Routes>
		</div>
	);
}

export default App;
