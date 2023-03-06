import { configureStore } from '@reduxjs/toolkit'

import authSlice from './auth'
import profileSlice from './profile'

export default configureStore({
  reducer: {
    auth: authSlice,
    profile: profileSlice
  }
})
