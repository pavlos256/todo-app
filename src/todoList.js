export function TodoList({ todos }) {
	if (todos.length === 0) {
		return null;
	}

	return (
		<table>
			<thead>
				<tr>
					<th>Title</th>
					<th>Content</th>
				</tr>
			</thead>

			<tbody>
				{todos.map((todo, index) => (
					<TodoRow key={index} todo={todo} />
				))}
			</tbody>
		</table>
	);
}

function TodoRow({ todo }) {
	return (
		<tr>
			<td>{todo.title}</td>
			<td>{todo.content}</td>
		</tr>
	);
}
