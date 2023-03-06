import { createSlice } from '@reduxjs/toolkit'
import fetchUser from '../api/fetchUser'

function userLogIn(formInput) {
  return async (dispatch, getState) => {
    const status = getState().auth.status
    if (['pending', 'updating'].includes(status)) {
      return
    }
  
    dispatch(actions.connect())
    try {
      const response = await fetchUser('/login', {email: formInput.email, password: formInput.password})

      let token = null
      let errorMessage = null

      if (response.status === 200 && response.body) {
        token = response.body.token
      }
      if (response.error) {
        errorMessage = response.error.message
      }
  
      if (token) dispatch(actions.connected(token))
      if (errorMessage) dispatch(actions.rejected(errorMessage))
    } catch (error) {
      dispatch(actions.rejected(error))
    }
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'disconnected',
    token: null,
    error: null
  },
  reducers: {
    connect: (state) => {
      switch (state.status) {
        case 'disconnected':
          return {
            ...state,
            status: 'pending'
          }
        case 'rejected':
          return {
            ...state,
            error: null,
            status: 'pending'
          }
        case 'connected':
          return {
            ...state,
            status: 'updating'
          }
        default: return
      }
    },
    connected: (state, action) => {
      if (['pending', 'updating'].includes(state.status)) {
        return {
          ...state,
          token: action.payload,
          status: 'connected'
        }
      }
      return
    },
    rejected: (state, action) => {
      if (['pending', 'updating'].includes(state.status)) {
        return {
          ...state,
          error: action.payload,
          token: null,
          status: 'rejected'
        }
      }
      return
    },
    disconnect: (state) => {
      return {
        ...state,
        token: null,
        status: 'disconnected'
      }
    }
  }
})

export { userLogIn }

const { actions, reducer } = authSlice
export const { disconnect } = actions
export default reducer
