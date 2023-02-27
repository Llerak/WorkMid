import TaskList from "./components/TaskList/TaskList";

function App() {
	const border: string = "border border-solid border-blue-500";
	return (
		<div className="flex w-full">
			<TaskList />
		</div>
	);
}

export default App;
