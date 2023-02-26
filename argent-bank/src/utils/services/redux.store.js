import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import authSlice from './redux.auth'

export default configureStore({
  reducer: {
    auth: authSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})
