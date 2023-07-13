import React, { useState, useEffect } from 'react'
import './Profile.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { editUser, clearEditUser } from '../Redux/editUserSlice'
import { toast } from 'react-hot-toast'

const Profile = () => {
  const editUserData = useSelector((state) => state.edit)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    if (editUserData) {
      setName(editUserData.name)
      setEmail(editUserData.email)
      setPhone(editUserData.phone)
    }
  }, [editUserData])

  const submitHandler = async () => {
    try {
      const userData = {
        name: name,
        email: email,
        phone: phone
      }
  
      
      if (!name || !email || !phone) {
        toast.error('Please enter all fields')
        return;
      }
  
      if (editUserData) {
        await axios.put(
          `https://dark-teal-goldfish-wear.cyclic.app/users/${editUserData._id}`,
          userData
        )
        toast.success('User updated successfully')
      } else {
        await axios.post(
          'https://dark-teal-goldfish-wear.cyclic.app/users',
          userData
        )
        toast.success('User created successfully')
      }
  
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }
  
  const backHandler = () => {
    navigate('/')
    dispatch(clearEditUser())
  }
  return (
    <>
      <button className='back' onClick={backHandler}>
        Back
      </button>
      <div className='profile'>
        {editUserData ? (
          <>
            <h2>Edit User</h2>
            <form className='profile__form'>
              <label>Name</label>
              <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label>Email</label>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Phone</label>
              <input
                type='number'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <button
                className='profile__btn'
                type='button'
                onClick={submitHandler}
              >
                Update User
              </button>
            </form>
          </>
        ) : (
          <>
            <h2>Create User</h2>
            <form className='profile__form'>
              <label>Name</label>
              <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label>Email</label>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Phone</label>
              <input
                type='number'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <button
                className='profile__btn'
                type='button'
                onClick={submitHandler}
              >
                Create User
              </button>
            </form>
          </>
        )}
      </div>
    </>
  )
}

export default Profile
