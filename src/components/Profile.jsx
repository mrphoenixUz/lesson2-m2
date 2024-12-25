import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import BasicModal from './Modal'

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
      <Link to="/update-profile"></Link>
      <ul className='flex flex-col items-center justify-center'>
        <div className='flex items-center justify-between gap-10 mt-4'>
          <li><img className='w-60 h-60 rounded-full' src={user?.image ? `https://mustafocoder.pythonanywhere.com/api${user.image}` : "https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg"} alt="image" /></li>
          <li className='text-5xl font-semibold uppercase'>{user?.username}</li>
        </div>
        <div className='mt-4'>
          <li className='text-3xl flex justify-between gap-32'><p>Gender:</p> <span>{user?.gender}</span></li>
          <li className='text-3xl flex justify-between gap-32'><p>Email:</p> <span>{user?.email}</span></li>
          <li className='text-3xl flex justify-between gap-32'><p>Name:</p> <span>{user?.name}</span></li>
          <li className='text-3xl flex justify-between gap-32'><p>Age:</p> <span>{user?.age}</span></li>
        </div>
        <BasicModal />
      </ul>
    </div>
  )
}

export default Profile