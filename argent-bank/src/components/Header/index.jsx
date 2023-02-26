import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import * as authActions from '../../utils/services/redux.auth'

import logo from '../../assets/images/argentBankLogo.png'

function Header() {
  const dispatch = useDispatch()
  const { status } = useSelector(state => state.auth)

  return (
    <header>
      <nav className='header'>
        <Link to='/'>
          <img src={logo} alt='Argent Bank' className='header__logo' />
        </Link>

        <ul className='header__links'>
          {status !== 'connected' &&
            <li>
              <Link to='/login' className='icon icon--user'>Log In</Link>
            </li>
          }
          {status === 'connected' &&
            <>
              <li className='user-link'>
                <Link to='/profile' className='icon icon--user'>User</Link>
              </li>
              <li>
                <Link to='/' 
                  onClick={() => dispatch(authActions.disconnect())}
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
