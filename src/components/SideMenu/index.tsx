import { useLazyQuery } from "@apollo/client";
import { useCallback, useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import { LOGOUT } from "../Main/services/logout.query";
import SideMenuView from "./side-menu.view";

export const SideMenu = () => {
  const [onLogout, {data, loading, error}] = useLazyQuery(LOGOUT);
  const auth = useContext(AuthContext);
  const navigation = useHistory()
  const logout = useCallback(() => {
    onLogout({ variables: { id: auth.getUser()?.id } });
  }, [auth.getUser()]);

  useEffect(() => {
    if(!loading){
        if(data) {
            console.log(data)
            if(data.logout){
                navigation.push('/login')
            }
        };
        if(error) console.log(error);
    }
  }, [data, loading, error])


  return <SideMenuView onLogout={logout}/>;
};
