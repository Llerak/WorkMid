import {
	Card,
	CardHeader,
	Typography,
	CardBody,
	Input,
	Checkbox,
	CardFooter,
	Button,
} from "@material-tailwind/react";
import { SyntheticEvent } from "react";


type inputObj = {
	label: string;
	set: (e: SyntheticEvent<Element, Event>) => void;
};

type FormProps = {
	input: inputObj[];
	name: string;
	submitAction?: () => void;
};

export default function Form({ input, submitAction, name }: FormProps) {
	return (
		<div className="flex w-screen h-screen items-center justify-center">
			<Card className="w-96">
				<CardHeader
					variant="gradient"
					color="blue"
					className="mb-4 grid h-28 place-items-center"
				>
					<Typography variant="h3" color="white">
						{name}
					</Typography>
				</CardHeader>
				<CardBody className="flex flex-col gap-4">
					{input.map(({ label, set }, i) => {
						return <Input label={label} size="lg" onChange={set} key={i}/>;
					})}
					<div className="-ml-2.5">
						<Checkbox label="Remember Me" />
					</div>
				</CardBody>
				<CardFooter className="pt-0">
					<Button variant="gradient" fullWidth onClick={submitAction}>
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
