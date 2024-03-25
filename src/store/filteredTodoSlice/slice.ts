import { createSlice } from '@reduxjs/toolkit';
import { Todo } from '../../types/Todo';

const filteredTodosSlice = createSlice({
  name: 'filteredTodos',
  initialState: [] as Todo[],
  reducers: {
    setFilteredTodos: (state, action) => {
      return action.payload;
    },
  }
});

export const { setFilteredTodos } = filteredTodosSlice.actions;

export default filteredTodosSlice.reducer;