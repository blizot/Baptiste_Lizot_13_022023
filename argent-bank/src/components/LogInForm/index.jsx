function LogInForm() {
  return (
    <section className='log-in-form'>
      <h1 className='log-in-form__title'>Log In</h1>
      <form>
        <div className='log-in-form__text-input'>
          <label htmlFor='username'>Email</label>
          <input type='text' id='username' />
        </div>
        <div className='log-in-form__text-input'>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' />
        </div>
        <div className='log-in-form__checkbox'>
          <label htmlFor='remember'>Remember me</label>
          <input type='checkbox' id='remember' />
        </div>
        <button className='log-in-form__button primary-button'>Log In</button>
      </form>
    </section>
  )
}

export default LogInForm
