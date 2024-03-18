import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useAuthorize } from '../context/AutorizationProvider';
import { getTodos } from '../api/todos';
import { useTodos } from '../context/TodosProvider';
import TodoFooter from './TodoFooter';
import { ErrorMessage } from '../types/Errors';
import { SingleTodo } from './Todo';
import { Todo } from '../types/Todo';

const TodoList: React.FC = () => {
  const {
    todos,
    filteredTodos,
    setTodos,
    setErrorMessage,
  } = useTodos();

  const USER_ID = useAuthorize();

  useEffect(() => {
    if (USER_ID) {
      getTodos(USER_ID)
        .then(setTodos)
        .catch(() => setErrorMessage(ErrorMessage.Load));
    }
  }, [USER_ID, setTodos, setErrorMessage]);

  

  return (
    <View>
      <View data-cy="TodoList">
        {filteredTodos.length > 0 ? (
          filteredTodos.map((todo: Todo) => (
            <SingleTodo todo={todo} key={todo.id} />
          ))
        ) : (
          <Text>No todos found.</Text>
        )}
      </View>
      {todos.length > 0 && <TodoFooter />}
      {/* Hide the footer if there are no todos */}
    </View>
  );
}; 

export default TodoList;