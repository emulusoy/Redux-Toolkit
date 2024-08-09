import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/counterSlice'
import userReducer from '../redux/userSlice'
export const store = configureStore({ //redux storage burasıdır. export diyerek dışarıya açtık!
  reducer: {
    counter:counterReducer,
    user:userReducer,

  },
})
//sstore içine slicemizi bağladık!
