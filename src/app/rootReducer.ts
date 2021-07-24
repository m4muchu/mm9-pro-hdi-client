import { combineReducers } from '@reduxjs/toolkit'
import counterSlice from '../features/counter/counterSlice'
import userSlice from '../features/auth/authSlice'

console.log('userSlice+++++++++++++++++', userSlice)

const rootReducer = combineReducers({
  counter: counterSlice,
  user: userSlice,
})

export default rootReducer
