import React from "react";
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput";
import LoginWrapper from "./login.styled";

type Props = {
  email: string;
  password: string;
  onChangeEmail: (email: string) => void;
  onChangePassword: (password: string) => void;
  onSubmit: () => void
};

const LoginView: React.FC<Props> = (props) => (
  <LoginWrapper>
    <TextInput
      type={"email"}
      placeholder={"Email"}
      onChangeText={props.onChangeEmail}
      text={props.email}
      />
    <TextInput
      type={"password"}
      placeholder={"Senha"}
      onChangeText={props.onChangePassword}
      text={props.password}
    />
    <Button onClick={props.onSubmit} label={'Submit'} />
  </LoginWrapper>
);
export default LoginView;
