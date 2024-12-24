import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Profile = () => {
  const { user } = useSelector(state => state.auth)
  const navigate = useNavigate()
  useEffect(() => {
    if (!user) {
      navigate("/")
    }
  }, [user])
  return (
    <div>
      <Link to="/update-profile">Update Profile</Link>
      <ul className='list-disc'>
        <li>Username: {user?.username}</li>
        <li>Gender: {user?.gender}</li>
        <li>Email: {user?.email}</li>
        <li>name: {user?.name}</li>
        <li>age: {user?.age}</li>
        <li>Image: <img src={user?.image ? `https://mustafocoder.pythonanywhere.com/api${user.image}` : "https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg"} alt="image" /></li>
      </ul>
    </div>
  )
}

export default Profile