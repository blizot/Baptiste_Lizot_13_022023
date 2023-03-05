import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { fetchProfile } from '../../utils/services/redux.profile'

import NameEditForm from '../../components/NameEditForm'
import Accounts from '../../layouts/Accounts'

function Profile() {
  const dispatch = useDispatch()
  const { data: profileData } = useSelector(state => state.profile)
  const { status, token: jwt } = useSelector(state => state.auth)

  useEffect(() => {
    dispatch(fetchProfile(jwt))
  }, [jwt, dispatch])

  if (status === 'disconnected') {
    return <Navigate to='/' />
  }
  
  return (
    <main className='profile full-width-fill'>
      <h1 className='profile__welcome-message'>Welcome back<br />{profileData?.firstName} {profileData?.lastName}!</h1>
      <NameEditForm jwt={jwt} profileData={profileData} />

      {/* Mockup, should be replaced with the API */}
      <Accounts accounts={[
        {
          name: 'Argent Bank Checking (x8349)',
          amount: 2082.79,
          comment: 'Available Balance',
        },
        {
          name: 'Argent Bank Savings (x6712)',
          amount: 10928.42,
          comment: 'Available Balance',
        },
        {
          name: 'Argent Bank Credit Card (x8349)',
          amount: 184.30,
          comment: 'Current Balance',
        },
      ]} />
    </main>
  )
}

export default Profile
