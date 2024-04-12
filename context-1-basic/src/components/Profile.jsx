import React, {useContext} from 'react'
import UserContext from '../context/UserContext'
const Profile = () => {
  const {user} = useContext(UserContext)

    if(!user) return <h1>please Login</h1>

   return (
    <div>welcome to Profile {user.username}</div>
  )
}

export default Profile