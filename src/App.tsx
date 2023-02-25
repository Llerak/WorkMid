import BasicTaskList from "./components/TaskList/TaskList";

function App() {
	const border: string = "border border-solid border-blue-500";
	return (
		<div className="flex w-full">
			<BasicTaskList />
		</div>
	);
}

export default App;
