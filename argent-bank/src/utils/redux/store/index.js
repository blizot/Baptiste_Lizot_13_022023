import { configureStore } from '@reduxjs/toolkit'

import authSlice from '../../../services/auth'

export default configureStore({
  reducer: {
    auth: authSlice
  }
})
