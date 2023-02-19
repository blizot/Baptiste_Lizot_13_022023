import { Link, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import * as authActions from '../../services/auth'

import logo from '../../assets/images/argentBankLogo.png'

function Header() {
  const dispatch = useDispatch()
  let location = useLocation().pathname

  return (
    <header>
      <nav className='header'>
        <Link to='/'>
          <img src={logo} alt='Argent Bank' className='header__logo' />
        </Link>

        <ul className='header__links'>
          {['/', '/login'].includes(location) &&
            <li>
              <Link to='/login' className='icon icon--user'>Log In</Link>
            </li>
          }
          {['/profile'].includes(location) &&
            <>
              <li className='user-link'>
                <Link to='/profile' className='icon icon--user'>User</Link>
              </li>
              <li>
                <Link to='/' 
                  onClick={() => dispatch(authActions.logout())}
                  className='icon icon--log-out'>
                    Log Out
                </Link>
              </li>
            </>
          }
        </ul>
      </nav>
    </header>
  )
}

export default Header
