import React, { FC } from 'react'

interface Porps {
	todo: string,
	setTodo: React.Dispatch<React.SetStateAction<string>>,
	handleChange: (e: React.FormEvent) => void
}


const InputField: FC<Porps> = ({ todo, setTodo, handleChange }) => {

	// console.log(setTodo, "data1")
	return (
		<div className='form-style'>
			<form onSubmit={handleChange} >
				<input type='text' placeholder='please enter task' value={todo} onChange={(e) => setTodo(e.target.value)} className='input-field-style-1'/>
				<button type='submit' className='button-1'>Submit</button>
			</form>
		</div>
	)
}

export default InputField