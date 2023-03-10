import { Dispatch, SetStateAction, SyntheticEvent, useState } from "react";
import { handleInputWriting } from "../_utils";
import Form from "./Form";
import axios from "axios";

type AuthProps = {
	auth: Dispatch<SetStateAction<boolean>>;
};

interface IFormProps extends AuthProps {
	userExist: Dispatch<SetStateAction<boolean>>;
}

export default function AuthForm({ auth }: AuthProps) {
	const [userExist, setUserExist] = useState(false);
	return userExist ? (
		<Login auth={auth} userExist={setUserExist} />
	) : (
		<Signup auth={auth} userExist={setUserExist} />
	);
}

//! Login Form
function Login({ auth, userExist }: IFormProps) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const inputs = [
		{
			label: "Email",
			set: (e: SyntheticEvent) => handleInputWriting(e, setEmail),
		},
		{
			label: "Password",
			set: (e: SyntheticEvent) => handleInputWriting(e, setPassword),
		},
	];

	const botttonText = {
		message: "Don't you have an account?",
		link: "Sign up",
		action: () => userExist(false),
	};

	const handleSubmit = () => {
		//? Pending review and changes
		axios
			.post("https://luisvidal87.pythonanywhere.com/api-token-auth/", {
				username: email,
				password: password,
			})
			.then(() => {
				auth(true);
			})
			.catch((e) => console.error(e));
	};

	return (
		<Form
			name="Sign in"
			input={inputs}
			submitAction={handleSubmit}
			bottonLabel={botttonText}
		/>
	);
}

//! Register
function Signup({ auth, userExist }: IFormProps) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [repeatedPass, setRepeatedPass] = useState("");

	const inputs = [
		{
			label: "Email",
			set: (e: SyntheticEvent) => handleInputWriting(e, setEmail),
		},
		{
			label: "New password",
			set: (e: SyntheticEvent) => handleInputWriting(e, setPassword),
		},
		{
			label: "Repeat new password",
			set: (e: SyntheticEvent) => handleInputWriting(e, setRepeatedPass),
		},
	];

	const botttonText = {
		message: "Do you have an account?",
		link: "Sign in",
		action: ()=>userExist(true)
	};

	const handleSubmit = () => {};

	return (
		<Form
			name="Sign up"
			input={inputs}
			submitAction={handleSubmit}
			bottonLabel={botttonText}
		/>
	);
}
