import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Input,
	Checkbox,
	Button,
} from "@material-tailwind/react";
import { Dispatch, SetStateAction, SyntheticEvent, useState } from "react";
import axios from "axios";

type LoginProps = {
	setAuth: Dispatch<SetStateAction<boolean>>;
};

export default function Login({ setAuth }: LoginProps) {
	const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputWriting = (e: SyntheticEvent, set:Dispatch<SetStateAction<string>>) => {
    const { value } = e.target as HTMLInputElement;
		set(value);
  };
  
	return (
		<div className="flex w-screen h-screen items-center justify-center">
			<Card className="w-96">
				<CardHeader
					variant="gradient"
					color="blue"
					className="mb-4 grid h-28 place-items-center"
				>
					<Typography variant="h3" color="white">
						Sign In
					</Typography>
				</CardHeader>
				<CardBody className="flex flex-col gap-4">
					<Input
						label="password"
						size="lg"
						onChange={(e: SyntheticEvent) => handleInputWriting(e, setEmail)}
					/>
					<Input
						label="Password"
						size="lg"
						onChange={(e: SyntheticEvent) => handleInputWriting(e, setPassword)}
					/>
					<div className="-ml-2.5">
						<Checkbox label="Remember Me" />
					</div>
				</CardBody>
				<CardFooter className="pt-0">
					<Button
						variant="gradient"
						fullWidth
						onClick={() => {
							console.log(email);
							console.log(password);
							//working
							axios
								.get("http://luisvidal87.pythonanywhere.com/")
								.then((response) => {})
								.catch((error) => {});
						}}
					>
						Sign In
					</Button>
					<Typography variant="small" className="mt-6 flex justify-center">
						Don't have an account?
						<Typography
							as="a"
							href="#signup"
							variant="small"
							color="blue"
							className="ml-1 font-bold"
						>
							Sign up
						</Typography>
					</Typography>
				</CardFooter>
			</Card>
		</div>
	);
}
