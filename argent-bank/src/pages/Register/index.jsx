import { useState } from 'react'
import { Form, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import fetchUser from '../../utils/api/fetchUser'
import { userLogIn } from '../../utils/redux/auth'

function Register() {
  const [isRegistered, setRegistered] = useState(undefined)
  const registeredStatus = (status) => setRegistered(status)

  const dispatch = useDispatch()
  const { status: authStatus } = useSelector(state => state.auth)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const body = {
      email: event.target.email.value,
      password: event.target.password.value,
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value
    }
    try {
      const response = await fetchUser('/signup', body)

      if (response.status === 200 && response.body) {
        registeredStatus(true)

        setTimeout(() => {
          dispatch(userLogIn({
            email: event.target.email.value,
            password: event.target.password.value
          }))
        }, 2000)
      }
    } catch (error) {
      registeredStatus(false)
      console.error(error)
    }
  }

  if (authStatus === 'connected') {
    return <Navigate to='/profile' />
  }

  return (
    <main className='register full-width-fill'>
      <section className='register-form'>
        <h1 className='register-form__title'>Register</h1>
        <Form onSubmit={handleSubmit} method='post'>
          <div className='register-form__text-input register-form__text-input--grouped'>
            <div>
              <label htmlFor='form-firstName'>First name</label>
              <input type='text' id='form-firstName' name='firstName' required />
            </div>
            <div>
              <label htmlFor='form-lastName'>Last name</label>
              <input type='text' id='form-lastName' name='lastName' required />
            </div>
          </div>
          <div className='register-form__text-input'>
            <label htmlFor='form-email'>Email</label>
            <input type='email' id='form-email' name='email' required />
          </div>
          <div className='register-form__text-input'>
            <label htmlFor='form-password'>Password</label>
            <input type='password' id='form-password' name='password' required />
          </div>
          <button type='submit'
            className='register-form__button primary-button'>
              Register
          </button>
        </Form>
      </section>

      <div className={`register-form__notification ${isRegistered !== undefined && 'register-form__notification--visible'}`}>
        {isRegistered &&
            <p className='register-form__notification--success'>Account created succesfully!</p>}
        {!isRegistered &&
          <p className='register-form__notification--error'>There was an error, try again later.</p>}
      </div>
    </main>
  )
}

export default Register
