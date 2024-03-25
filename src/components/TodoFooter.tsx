import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FilterBy } from '../types/filter';
import { useDispatch } from 'react-redux';
import { setFilteredTodos } from '../store/filteredTodoSlice/slice';
import { useGetTodosQuery } from '../store/apiSlice/apiSlice';

const TodoFooter: React.FC = () => {
  const [ filter, setFilter ] = useState(FilterBy.All);
  const { data: todosFromServer } = useGetTodosQuery({});

  const dispatch = useDispatch();

  const handleClickAll = () => {
    dispatch(setFilteredTodos(todosFromServer));
  }

  const handleClickActive = () => {
    const active = todosFromServer.filter((todo: { completed: boolean; }) => todo.completed === false)
    dispatch(setFilteredTodos(active));
  }

const handleClickCompleted = () => {
  const completed = todosFromServer.filter((todo: { completed: boolean; }) => todo.completed === true);
  dispatch(setFilteredTodos(completed));
};

  return (
    <View style={styles.footer} data-cy="Footer">
      <Text style={styles.todoCount} data-cy="TodosCounter">
        {todosFromServer.length || 0} items left
      </Text>

      <View style={styles.filter} data-cy="Filter">
        <TouchableOpacity
          style={filter === FilterBy.All ? styles.selectedFilterLink : styles.filterLink}
          onPress={handleClickAll}
          data-cy="FilterLinkAll"
        >
          <Text>All</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={filter === FilterBy.Active ? styles.selectedFilterLink : styles.filterLink}
          onPress={handleClickActive}
          data-cy="FilterLinkActive"
        >
          <Text>Active</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={filter === FilterBy.Completed ? styles.selectedFilterLink : styles.filterLink}
          onPress={handleClickCompleted}
          data-cy="FilterLinkCompleted"
        >
          <Text>Completed</Text>
        </TouchableOpacity>
      </View>

      {/* don't show this button if there are no completed todos */}
      {/* TODO: Implement the Clear completed button */}
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  todoCount: {
    fontSize: 16,
  },
  filter: {
    flexDirection: 'row',
  },
  filterLink: {
    marginHorizontal: 5,
  },
  selectedFilterLink: {
    marginHorizontal: 5,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default TodoFooter;