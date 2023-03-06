import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import * as authActions from '../../utils/redux/auth'
import * as profileActions from '../../utils/redux/profile'

import logo from '../../assets/images/argentBankLogo.png'

function Header() {
  const dispatch = useDispatch()
  const { status: authStatus } = useSelector(state => state.auth)
  const { data: profileData } = useSelector(state => state.profile)

  return (
    <header>
      <nav className='header'>
        <Link to='/'>
          <img src={logo} alt='Argent Bank' className='header__logo' />
        </Link>

        <ul className='header__links'>
          {authStatus !== 'connected' &&
            <li>
              <Link to='/login' className='icon icon--user'>Log In</Link>
            </li>
          }
          {authStatus === 'connected' &&
            <>
              <li className='user-link'>
                <Link to='/profile' className='icon icon--user'>{profileData?.firstName}</Link>
              </li>
              <li>
                <Link to='/' 
                  onClick={() => {
                    dispatch(authActions.disconnect())
                    dispatch(profileActions.purge())
                  }}
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
