import { useCallback, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import LoginView from "./login.view";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [cookies, setCookies] = useCookies(['email', 'password']) 
  
  useEffect(() => {
    if(cookies.email){
        setEmail(cookies.email)
    }
    if(cookies.password){
        setPassword(cookies.password)
    }
  }, [])

  useEffect(() => {
    if(cookies.email !== email){
        setCookies('email', email)
    }
    if(cookies.password !== password){
        setCookies('password', password)
    }
  }, [email, password])
  
  const onSubmit = useCallback(() => {
    console.log({ email, password });
  }, [email, password]);

  return (
    <LoginView
      email={email}
      password={password}
      onChangeEmail={setEmail}
      onChangePassword={setPassword}
      onSubmit={onSubmit}
    />
  );
};
