import React, { FC, useEffect, useRef, useState } from 'react'
import { Todoobj } from '../model'
import { Check, Pencil, Trash2 } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { deleteTodo, isDone, updateTodo } from '../store/TodoSlice';

interface Todo {
	index: number;
	todo: Todoobj;
	todos: Todoobj[];
	setTodos: React.Dispatch<React.SetStateAction<Todoobj[]>>; // Change this line
}

const SingleTodo: FC<Todo> = ({ todo, todos, setTodos }) => {

	const [isEdit, setIsEdit] = useState(false);
	const [todoData, setTodoData] = useState(todo.todo);

	const dispatch = useDispatch();

	const handleUpdate = (e: React.FormEvent, id: number) => {
		e.preventDefault();
		dispatch(updateTodo({ todoData, id }))
		setIsEdit(false);
	};

	const handleDelete = (id: number) => {
		dispatch(deleteTodo({ id }))
	};

	const handleDone = (id: number) => {
		dispatch(isDone({ id, idDone: todo.idDone }))
	}

	const inputRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		inputRef.current?.focus();
	}, [isEdit])

	return (
		<div className='single-todo' >
			<form onSubmit={(e) => handleUpdate(e, todo.id)} style={{ display: 'flex', justifyContent: 'space-between', width: '100%', paddingRight: '1rem' }}>
				<div className="input-field-style" >

					{isEdit ? (
						<input
							value={todoData}
							onChange={(e) => setTodoData(e.target.value)}
							ref={inputRef}
							style={{ padding: "5px" }}
						// ref={inputRef}
						/>
					) : todo.idDone ? (
						<s >{todo.todo}</s>
					) : (
						<span >{todo.todo}</span>
					)}
				</div>

				<div style={{ display: "flex" }}>

					<p style={{ marginLeft: "1rem" }} onClick={() => { setIsEdit(!isEdit) }}><Pencil /></p>
					<p style={{ marginLeft: "1rem" }} onClick={() => { handleDelete(todo.id) }}><Trash2 /></p>
					<p style={{ marginLeft: "1rem" }} onClick={() => { handleDone(todo.id) }}><Check /></p>
				</div>
			</form>

			{/* <p style={{ marginLeft: "1rem" }} >Delete</p> */}
		</div>
	)
}

export default SingleTodo