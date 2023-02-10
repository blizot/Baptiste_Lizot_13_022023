import { Link, useLocation } from 'react-router-dom'

import logo from '../../assets/images/argentBankLogo.png'

function Header() {
  let location = useLocation().pathname;

  return (
    <header>
      <nav className='header'>
        <Link to='/'>
          <img src={logo} alt='Argent Bank' className='header__logo' />
        </Link>

        <ul className='header__links'>
          {['/', '/signin'].includes(location) &&
            <li><Link to='/signin' className='icon icon--user'>Sign In</Link></li>
          }
          {['/user'].includes(location) &&
            <>
              <li><Link to='/user' className='icon icon--user'>User</Link></li>
              <li><Link to='/' className='icon icon--sign-out'>Sign Out</Link></li>
            </>
          }
        </ul>
      </nav>
    </header>
  )
}

export default Header
