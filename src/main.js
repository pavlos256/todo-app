import React, { useState } from "react";
import { TodoList } from "./todoList";

export function Main() {
	const [todos, setTodos] = useState([]);

	const onAddTodo = (todo) => {
		setTodos((oldTodos) => oldTodos.concat(todo));
	};

	return (
		<React.Fragment>
			<h1>TODO App</h1>

			<TodoList todos={todos} />

			<TodoForm onAddTodo={onAddTodo} />
		</React.Fragment>
	);
}

function TodoForm({ onAddTodo }) {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const onSubmit = (ev) => {
		ev.preventDefault();

		const todo = { title, content };
		onAddTodo(todo);
	};

	return (
		<form onSubmit={onSubmit}>
			<p>
				<label>
					Title
					<input
						type="text"
						value={title}
						onChange={(ev) => setTitle(ev.target.value)}
						required
						style={{ display: "block" }}
					/>
				</label>
			</p>

			<p>
				<label>
					Content
					<textarea
						value={content}
						onChange={(ev) => setContent(ev.target.value)}
						cols={40}
						style={{ display: "block" }}
					/>
				</label>
			</p>

			<button type="submit">Add todo</button>
		</form>
	);
}
