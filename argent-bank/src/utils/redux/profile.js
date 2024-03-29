import { createSlice } from '@reduxjs/toolkit'
import fetchUser from '../api/fetchUser'

function fetchProfile(jwt) {
  return async (dispatch, getState) => {
    const status = getState().profile.status
    if (['pending', 'updating'].includes(status)) {
      return
    }
  
    dispatch(actions.fetching())
    try {
      const response = await fetchUser('/profile', {}, jwt)

      let data = null
      if (response.status === 200 && response.body) {
        data = response.body
      }
      if (data) dispatch(actions.resolved(data))
    } catch (error) {
      dispatch(actions.rejected(error))
    }
  }
}

function editName(body, jwt) {
  return async (dispatch, getState) => {
    const status = getState().profile.status
    if (['editing'].includes(status)) {
      return
    }

    dispatch(actions.editing())
    try {
      const response = await fetchUser('/profile', body, jwt, 'PUT')

      let data = null
      if (response.status === 200 && response.body) {
        data = response.body
      }
      if (data) dispatch(actions.resolved(data))
    } catch (error) {
      dispatch(actions.rejected(error))
    }
  }
}

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    status: 'void',
    data: null,
    error: null
  },
  reducers: {
    fetching: (state) => {
      switch (state.status) {
        case 'void':
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
        case 'resolved':
          return {
            ...state,
            status: 'updating'
          }
        default: return
      }
    },
    resolved: (state, action) => {
      if (['pending', 'updating', 'editing'].includes(state.status)) {
        return {
          ...state,
          data: action.payload,
          status: 'resolved'
        }
      }
      return
    },
    rejected: (state, action) => {
      if (['pending', 'updating', 'editing'].includes(state.status)) {
        return {
          ...state,
          error: action.payload,
          data: null,
          status: 'rejected'
        }
      }
      return
    },
    editing: (state) => {
      return {
        ...state,
        status: 'editing'
      }
    },
    purge: (state) => {
      return {
        ...state,
        data: null,
        status: 'void'
      }
    }
  }
})

export { fetchProfile, editName }

const { actions, reducer } = profileSlice
export const { purge } = actions
export default reducer
