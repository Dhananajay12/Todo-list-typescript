import React, { FC } from 'react'

interface Porps {
	todo: string,
	setTodo: React.Dispatch<React.SetStateAction<string>>,
	handleChange: (e: React.FormEvent) => void
}


const InputField: FC<Porps> = ({ todo, setTodo, handleChange }) => {

	// console.log(setTodo, "data1")
	return (
		<div>
			<form onSubmit={handleChange}>
				<input type='text' value={todo} onChange={(e) => setTodo(e.target.value)} />
				<button type='submit'>Submit</button>
			</form>
		</div>
	)
}

export default InputField