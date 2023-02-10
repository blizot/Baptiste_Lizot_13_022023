function UserWelcome({ user }) {
  return (
    <>
      <h1 className='user__welcome-message'>Welcome back<br />{user}!</h1>
      <button className='primary-button'>Edit Name</button>
    </>
  )
}

export default UserWelcome
