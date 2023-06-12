import { useState, useEffect } from "react"

const UserProfile = ({ currentUser }) => {
  const {first_name, last_name, title, email, is_admin} = currentUser


  return (
    <div>
      User Profile
      <h2>{first_name} {last_name}</h2>
    </div>
  )
}

export default UserProfile