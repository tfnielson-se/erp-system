import { useState } from "react";

function Login({ onLogin }) {
	const [email, setEmail] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		fetch("http://127.0.0.1:3000/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email }),
		})
			.then((r) => r.json())
			.then((user) => onLogin(user));
	}

	return (
		<form onSubmit={handleSubmit}>
			<div>
        <h1>Log in</h1>
      </div>
			<div>
				<input
					type="text"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<button type="submit">Login</button>
		</form>
	);
}

export default Login;
