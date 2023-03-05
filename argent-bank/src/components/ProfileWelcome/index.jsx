import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchProfile } from '../../utils/services/redux.profile'

import ProfileNameEditForm from '../ProfileNameEditForm'

function ProfileWelcome() {
  const dispatch = useDispatch()
  const { data: profileData } = useSelector(state => state.profile)
  const { token: jwt } = useSelector(state => state.auth)

  useEffect(() => {
    dispatch(fetchProfile(jwt))
  }, [jwt, dispatch])

  const [isFormVisible, setFormVisibility] = useState(false)

  const toggleFormVisibility = () => setFormVisibility(!isFormVisible)

  return (
    <>
      <h1 className='profile__welcome-message'>Welcome back<br />{profileData?.firstName} {profileData?.lastName}!</h1>
      <button onClick={toggleFormVisibility} className={`${isFormVisible ? 'hide-everything' : 'primary-button'}`}>Edit Name</button>
      <ProfileNameEditForm formVisibility={{value: isFormVisible, toggle: toggleFormVisibility}} data={{profileData, jwt}} />
    </>
  )
}

export default ProfileWelcome
