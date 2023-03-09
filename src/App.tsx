import { useState } from "react";
import Login from "./components/Login/Login";
import BasicTaskList from "./components/TaskMenu/BasicTaskList";

export default function App() {
	const [auth, setauth] = useState<boolean>(false);

	return <div className="App">{auth ? <BasicTaskList /> : <Login auth={setauth}/>}</div>;
}
