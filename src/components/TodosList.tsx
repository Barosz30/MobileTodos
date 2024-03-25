import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import TodoFooter from './TodoFooter';
import { SingleTodo } from './Todo';
import { Todo } from '../types/Todo';
import { useGetTodosQuery } from '../store/apiSlice/apiSlice';
import { RootState } from '../store/store';
import useTodos from '../utils/updateTodos';

const TodoList: React.FC = () => {
  const { data: todosFromServer, error, isLoading, refetch } = useGetTodosQuery({});
  const visibleTodos = useSelector((state: RootState) => state.filteredTodos as Todo[])
  const { updateTodos }  = useTodos();

  useEffect(() => {
    const fetchDataAndUpdate = () => {
      try {
        updateTodos();
        console.log("update poszedł")
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };
  
    fetchDataAndUpdate();
  }, [todosFromServer]);

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading todos.</Text>;

  return (
    <View>
      <View data-cy="TodoList">
        {visibleTodos?.length > 0 ? (
          visibleTodos.map((todo: Todo) => (
            <SingleTodo todo={todo} key={todo.id} />
          ))
        ) : (
          <Text>No todos found.</Text>
        )}
      </View>
      {todosFromServer?.length > 0 && <TodoFooter />}
    </View>
  );
};

export default TodoList;
