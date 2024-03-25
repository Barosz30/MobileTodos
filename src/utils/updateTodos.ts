
import { useDispatch } from 'react-redux';
import { useGetTodosQuery } from '../store/apiSlice/apiSlice';
import { setFilteredTodos } from '../store/filteredTodoSlice/slice';

const useTodos = () => {
  const dispatch = useDispatch();
  const { data: todosFromServer, error, isLoading, refetch } = useGetTodosQuery({});

  const updateTodos = () => {
    refetch();
    dispatch(setFilteredTodos(todosFromServer));
  };

  return { todosFromServer, error, isLoading, updateTodos };
};

export default useTodos;