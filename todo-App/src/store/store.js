import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { taskSlice } from './todos/taskSlice'

export default configureStore({
    reducer: {
        authentication: authSlice.reducer,
        tasks: taskSlice.reducer
    }
})