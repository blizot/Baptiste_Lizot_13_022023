import logo from '../../assets/images/argentBankLogo.png'


function Header() {
  return (
    <header>
      <nav className="header">
        <a href='/'>
          <img src={logo} alt="Argent Bank" className='header__logo' />
        </a>

        <ul className='header__links'>
          <li><a href='/user' className='icon icon--user'>User</a></li>
          <li><a href='/signin' className='icon icon--user'>Sign In</a></li>
          <li><a href='/' className='icon icon--sign-out'>Sign Out</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header