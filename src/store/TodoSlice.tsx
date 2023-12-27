import { createSlice } from "@reduxjs/toolkit";
import { Todoobj } from "../model";

interface TodoState {
	todos: Todoobj[];
}

const initialState: TodoState = {
	todos: [],
}


const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTodo: (state, action) => {
			state.todos = [...state.todos, action.payload]
		},
		updateTodo: (state, action) => {
			console.log(action)
			const index = state.todos.findIndex(todo => todo.id === action.payload.id);

			// If the todo is found, update it
			if (index !== -1) {
				state.todos[index] = { ...state.todos[index], todo: action.payload.todoData };
			}
		},
		deleteTodo: (state, action) => {
			const index = state.todos.filter(todo => todo.id !== action.payload.id);
			state.todos = index
		},
		isDone: (state, action) => {
			const index = state.todos.findIndex(todo => todo.id === action.payload.id);

			// If the todo is found, update it
			if (index !== -1) {
				state.todos[index] = { ...state.todos[index], idDone: !action.payload.idDone };
			}
		},
	}
})

export const { addTodo, updateTodo, deleteTodo, isDone } = todoSlice.actions;

export default todoSlice.reducer;
