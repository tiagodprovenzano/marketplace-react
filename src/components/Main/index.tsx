import { useLazyQuery } from "@apollo/client";
import React, { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useHistory, useLocation } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import MainView from "./main.view";
import { GET_USER } from "./services/get-user.query";

export const Main: React.FC = (props) => {
  const [authenticating, setAuthenticating] = useState<boolean>(true);
  const [cookies] = useCookies(["token", "user-id"]);
  const navigation = useHistory();
  const auth = useContext(AuthContext)
  const location = useLocation()
  const [getUser, { data, loading, error }] = useLazyQuery(GET_USER);
  useEffect(() => {
    if(location.pathname !== '/login' && authenticating){
      const { token } = cookies;
      if (!token) {
        navigation.push("/login");
      } else {
        // navigation.push('/login')
        getUser({ variables: { userId: cookies["user-id"] } });
      }
    }
  }, [location.pathname, authenticating]);

  useEffect(() => {
    if (!loading) {
      if (data) {
        console.log("usuário autenticado", data);
        const user = data.user
        auth.setUser(user);
        setAuthenticating(false)
      } else {
        if (error) {
          console.log(error)
          navigation.push('/login')
        };
      }
    }
  }, [data, loading, error]);

  return <MainView children={props.children} authenticating={authenticating} />;
};
