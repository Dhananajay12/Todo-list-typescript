import { useState } from 'react'
import './App.css'
import InputField from './component/InputField'

import TodoList from './component/TodoList'
import { Todoobj } from './model'


function App() {

	const [todo, setTodo] = useState('')
	const [todos, setTodos] = useState<Todoobj[]>([])

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (todo) {
			setTodos([...todos, { id: Date.now(), todo, idDone: false }]);
			setTodo("");
		}
	}

	return (
		<div style={{ textAlign: 'center' }}>
			{/* <h1>{todo}</h1> */}
			<div style={{ display: 'inline-block', margin: 'auto' }}>
			<InputField todo={todo} setTodo={setTodo} handleChange={handleSubmit} />
			<TodoList todos={todos} setTodos={setTodos} /> 
			</div>
		</div>
	)
}

export default App
