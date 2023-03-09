import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import { Login } from "./components/Login/Login";
import BasicTaskList from "./components/TaskMenu/TaskList";


export default function App() {
	const [auth, setauth] = useState<boolean>(false);

	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<div className="App">
				{auth ? <BasicTaskList /> : <Login auth={setauth} />}
			</div>
			<ReactQueryDevtools/>
		</QueryClientProvider>
	);
}
