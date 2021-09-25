import React from "react";
import { ContentContainer } from "../ContentContainer";
import { SideMenu } from "../SideMenu";
import MainViewWrapper from "./main.styled";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Login } from "../../screens/Login";

type Props = {
    /**
     * Tell wether or not the component is authenticating
     */
     authenticating: boolean
}

const MainView: React.FC<Props> = (props) => (
  <MainViewWrapper>
    <div className={"main-wrapper"}>
      <Switch>
        <Route path={"/login"} component={Login} />
        <Route path={"/"}>
            {props.authenticating? 
                <div>loading</div> : 
            (
                <>
                    <SideMenu />
                    <Route path={"/content"}>
                        <ContentContainer />
                    </Route>
                </>
            )
            }
        </Route>
      </Switch>
    </div>
  </MainViewWrapper>
);

export default MainView;
