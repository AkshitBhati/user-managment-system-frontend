import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../Redux/veiwUserSlice'
import { deleteUser } from '../Redux/deleteUserSclice'
import { editUser } from '../Redux/editUserSlice'
import { FadeLoader } from 'react-spinners'
import axios from 'axios'


const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [usersData, setUserData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getData = () => {
    fetch("https://dark-teal-goldfish-wear.cyclic.app/users")
      .then(res => res.json())
      .then((data) => {
        localStorage.setItem('users', JSON.stringify(data))
        setUserData(data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error(error)
        setIsLoading(false)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  const veiwHandler = (data) => {
    dispatch(addUser(data))
    navigate(`/veiw/${data._id}`)
  }

  const addHandler = () => {
    navigate('/profile')
  }

  const editHandler = (data) => {
    dispatch(editUser(data))
    localStorage.setItem("user Info", JSON.stringify(data))
    navigate("/profile")
  }

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`https://dark-teal-goldfish-wear.cyclic.app/users/${userId}`);
      window.location.reload()
      
    } catch (error) {
      
      console.log(error);
    }
  }

  return (
    <div className='home'>
      <div>
        <button className='home__addUser' onClick={addHandler}>Add User</button>
      </div>
      <div >
        <table className='home__table'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th colSpan="3" className='table__actions'></th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="5">
                  <div className="table__loader">
                    <FadeLoader />
                  </div>
                </td>
              </tr>
            ) : (
              usersData.map((data) => (
                <tr key={data._id}>
                  <td className='table__id'>{data._id}</td>
                  <td>{data.name}</td>
                  <td><button onClick={() => veiwHandler(data)}>View</button></td>
                  <td><button onClick={() => editHandler(data)}>Edit</button></td>
                  <td><button onClick={() => deleteUser(data._id)} type="reset">Delete</button></td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home
