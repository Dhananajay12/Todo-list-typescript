import { useState } from 'react'
import './App.css'
import InputField from './component/InputField'

import TodoList from './component/TodoList'
import { Todoobj } from './model'
import { useDispatch } from 'react-redux'
import { addTodo } from './store/TodoSlice'


function App() {

	const [todo, setTodo] = useState('')
	const [todos, setTodos] = useState<Todoobj[]>([])

	const dispatch = useDispatch();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (todo) {
			setTodos([...todos, { id: Date.now(), todo, idDone: false }]);
			dispatch(addTodo({ id: Date.now(), todo, idDone: false }))
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
