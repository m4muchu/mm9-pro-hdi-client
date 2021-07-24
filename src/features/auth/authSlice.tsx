import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export interface User {
  authenticated: boolean
}

const initialState: User = {
  authenticated: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserAuthenticated: (state, action: PayloadAction<User>) => {
      state.authenticated = action.payload.authenticated
    },
  },
})

export const isAuthenticated = (state: RootState) => state.user.authenticated

export const { setUserAuthenticated } = userSlice.actions

export default userSlice.reducer
