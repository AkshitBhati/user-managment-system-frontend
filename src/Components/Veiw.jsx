import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { removeUser } from '../Redux/veiwUserSlice'

const Veiw = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userData = useSelector((state) => state.user)

  const backHandler = () => {
    dispatch(removeUser())
    navigate('/')
  }
  return (
    <>
    <button className='home__addUser' onClick={backHandler}>Back</button>
    <table className="home__table">
    <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
        </tr>
    </thead>
    <tbody>
    
          {userData.map((data) => (
        <tr>
          
            <td >{data._id}</td>
            <td >{data.name}</td>
            <td>{data.email}</td>
            <td>{data.phone}</td>
          
        </tr>
            ))}  
        
        
    </tbody>
</table>
</>
  )
}

export default Veiw
