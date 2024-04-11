import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Todo } from '../../types/Todo';
import { USER_ID } from '../../constans/constans';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://mate.academy/students-api' }),
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], unknown>({
      query: () => `/todos?userId=${USER_ID}`,
    }),
    addTodo: builder.mutation({
      query: (newTodo: Omit<Todo, 'id'>) => ({
        url: '/todos',
        method: 'POST',
        body: newTodo,
      }),
    }),
    deleteTodo: builder.mutation({
      query: (id: number) => ({
        url: `/todos/${id}`,
        method: 'DELETE',
      }),
    }),
    updateTodo: builder.mutation({
      query: ({ id, data }: { id: number; data: Partial<Todo> }) => ({
        url: `/todos/${id}`,
        method: 'PATCH',
        body: data,
      }),
    }),
  }),
});

export const { useGetTodosQuery, useAddTodoMutation, useDeleteTodoMutation, useUpdateTodoMutation } = apiSlice;



