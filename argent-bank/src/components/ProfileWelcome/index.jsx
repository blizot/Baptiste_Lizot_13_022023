import { useEffect } from 'react'
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

  return (
    <>
      <h1 className='profile__welcome-message'>Welcome back<br />{profileData?.firstName} {profileData?.lastName}!</h1>
      <ProfileNameEditForm jwt={jwt} profileData={profileData} />
    </>
  )
}

export default ProfileWelcome
