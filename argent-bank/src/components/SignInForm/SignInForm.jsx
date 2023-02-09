function SignInForm() {
  return (
    <section className='sign-in-form'>
      <h1 className='sign-in-form__title'>Sign In</h1>
      <form>
        <div className='sign-in-form__text-input'>
          <label for='username'>Username</label>
          <input type='text' id='username' />
        </div>
        <div className='sign-in-form__text-input'>
          <label for='password'>Password</label>
          <input type='password' id='password' />
        </div>
        <div className='sign-in-form__checkbox'>
          <label for='remember'>Remember me</label>
          <input type='checkbox' id='remember' />
        </div>
        <button className='sign-in-form__button'>Sign In</button>
      </form>
    </section>
  )
}

export default SignInForm