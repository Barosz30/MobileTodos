import { configureStore } from '@reduxjs/toolkit';
import filteredTodosReducer from './filteredTodoSlice/slice'
import { apiSlice } from './apiSlice/apiSlice';

const store = configureStore({
  reducer: {
    filteredTodos: filteredTodosReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
