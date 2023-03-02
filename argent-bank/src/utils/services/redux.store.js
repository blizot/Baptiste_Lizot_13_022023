import { configureStore } from '@reduxjs/toolkit'

import authSlice from './redux.auth'
import profileSlice from './redux.profile'

export default configureStore({
  reducer: {
    auth: authSlice,
    profile: profileSlice
  }
})
