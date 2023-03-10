import { Dispatch, SetStateAction, SyntheticEvent, useState } from "react";
import { handleInputWriting } from "../_utils";
import Form from "./Form";
import axios from "axios";

type LoginProps = {
  auth: Dispatch<SetStateAction<boolean>>;
};

export function Login({ auth }: LoginProps) {
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

  const handleSubmit = () => {
    //#Pending review and changes
	axios
      .post("https://luisvidal87.pythonanywhere.com/api-token-auth/", {
        username: email,
        password: password,
      })
      .then(() => {
        auth(true);
      })
      .catch(() => {});
  };

  return <Form name="Sign in" input={inputs} submitAction={handleSubmit} />;
}

export function Signup() {
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

  const handleSubmit = () => {};

  return <Form name="Sign un" input={inputs} submitAction={handleSubmit} />;
}
