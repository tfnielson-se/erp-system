import { useState, useEffect } from 'react'
import Home from './components/Home'
import Login from './components/Login'
import _ from 'lodash'
import './App.css'

function App() {
  const [user, setUser] = useState(null);
  console.log(user)

  useEffect(() => {
    fetch("http://127.0.0.1:3000/me")
    .then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
        console.log(user.id)
      }
    });
  }, []);


  if (!user) return  <Login onLogin={setUser} />;
  return (
    <div>
      <h1>ERP</h1>
    </div>
  )
}

export default App
