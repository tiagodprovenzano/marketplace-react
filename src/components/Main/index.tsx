import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router";
import MainView from "./main.view";

export const Main: React.FC = (props) => {
  const [authenticating, setAuthenticating] = useState<boolean>(true)
  const [cookies] = useCookies(['token'])
  const navigation = useHistory()
  useEffect(() => {
    console.log(cookies);
    if(!cookies.token){
      navigation.push('/login')
    }
  }, []);

  return <MainView children={props.children} authenticating={authenticating} />;
};
