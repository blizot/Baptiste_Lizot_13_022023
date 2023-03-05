
import { Form, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userLogIn } from '../../utils/services/redux.auth'

function LogIn() {
  const dispatch = useDispatch()
  const { status: authStatus, error: authError } = useSelector(state => state.auth)

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(userLogIn({
      email: event.target.email.value,
      password: event.target.password.value
    }))
  }

  if (authStatus === 'connected') {
    return <Navigate to='/profile' />
  }

  return (
    <main className='log-in full-width-fill'>
      <section className='log-in-form'>
        <h1 className='log-in-form__title'>Log In</h1>
        <Form onSubmit={handleSubmit} method='post'>
          <div className='log-in-form__text-input'>
            <label htmlFor='form-email'>Email</label>
            <input type='email' id='form-email' name='email' required />
          </div>
          <div className='log-in-form__text-input'>
            <label htmlFor='form-password'>Password</label>
            <input type='password' id='form-password' name='password' required />
          </div>
          <div className='log-in-form__checkbox'>
            <label htmlFor='remember'>Remember me</label>
            <input type='checkbox' id='remember' />
          </div>
          <button type='submit'
            className='log-in-form__button primary-button'>
              Log In
          </button>
        </Form>
      </section>

      <div className={`log-in-form__error ${authStatus === 'rejected' && 'log-in-form__error--visible'}`}>
        <p className='prevent-text-overflow'>{ authError }</p>
      </div>
    </main>
  )
}

export default LogIn
