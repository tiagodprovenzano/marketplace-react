import { useMutation, useQuery } from "@apollo/client";
import { useCallback, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import LoginView from "./login.view";
import { LOGIN_QUERY } from "./services/login.mutation";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [cookies, setCookies] = useCookies(['email', 'password', 'token', 'user-id']) 
  const [login] = useMutation(LOGIN_QUERY)
  const auth = useContext(AuthContext)
  const navigation = useHistory()
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
    login({variables: {email, password}}).then((value) => {
      console.log('apos o  login', value);
      if(value?.data?.login){
        const { token, id} = value.data.login
        auth.setUser(value.data.login)
        if(token){
          setCookies('token', token)
          localStorage.setItem('token', token)
        }
        if(id){
          setCookies('user-id', id)
        }
        navigation.push('/')
      }
    })
    .catch((e) => {
      console.log(e);
      
    })
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
