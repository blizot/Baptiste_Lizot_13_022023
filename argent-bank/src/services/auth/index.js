import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    username: null
  },
  reducers: {
    login: (state) => {
      return {
        ...state,
        isLoggedIn: true,
        username: 'Test'
      }
    },
    logout: (state) => {
      return {
        ...state,
        isLoggedIn: false,
        username: null
      }
    }
  }
})

const { actions, reducer } = authSlice

export const { login, logout } = actions

export default reducer
