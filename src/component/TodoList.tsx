import React, { FC } from 'react'
import { Todoobj } from '../model'
import SingleTodo from './SingleTodo'


interface Todo {
	todos: Todoobj[],
	setTodos: React.Dispatch<React.SetStateAction<Todoobj[]>>
}

const TodoList: FC<Todo> = ({ todos, setTodos }) => {


	console.log(setTodos , "data")
	// const changeInfo = (id) =>{
	// 	setTodos(})  
	// }

	return (
		<>
			{todos.map((todo ,index ) => {
				return (
					<>
						<SingleTodo todo={todo} setTodos={setTodos} todos={todos} key={todo.id} index={index}/>
					</>
				)
			})} 
		</>
	)
}

export default TodoList