function SignInForm() {
  return (
    <section className='sign-in-form'>
      <h1 className='sign-in-form__title'>Sign In</h1>
      <form>
        <div className='sign-in-form__text-input'>
          <label htmlFor='username'>Username</label>
          <input type='text' id='username' />
        </div>
        <div className='sign-in-form__text-input'>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' />
        </div>
        <div className='sign-in-form__checkbox'>
          <label htmlFor='remember'>Remember me</label>
          <input type='checkbox' id='remember' />
        </div>
        <button className='sign-in-form__button primary-button'>Sign In</button>
      </form>
    </section>
  )
}

export default SignInForm