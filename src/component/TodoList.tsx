import React, { FC } from 'react'
import { Todoobj } from '../model'
import SingleTodo from './SingleTodo'
import { useSelector } from 'react-redux'
import { RootState } from '../store/Store'


interface Todo {
	todos: Todoobj[],
	setTodos: React.Dispatch<React.SetStateAction<Todoobj[]>>
}

const TodoList: FC<Todo> = ({  setTodos }) => {

	const todoss = useSelector((state: RootState) => state.todo.todos)

	return (
		<>
			{todoss.map((todo ,index ) => {
				return (
					<>
						<SingleTodo todo={todo} setTodos={setTodos} todos={todoss} key={todo.id} index={index}/>
					</>
				)
			})} 
		</>
	)
}

export default TodoList