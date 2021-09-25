import React from "react";
import { ContentContainer } from "../ContentContainer";
import { SideMenu } from "../SideMenu";
import MainViewWrapper from "./main.styled";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const MainView: React.FC = (props) => (
  <MainViewWrapper>
    <div className={"main-wrapper"}>
      <Router>
        <Switch>
          <Route path={"/login"}>
            <div>login</div>
          </Route>
          <Route path={"/"}>
            <SideMenu />
            <Route path={"/content"}>
              <ContentContainer />
            </Route>
          </Route>
        </Switch>
      </Router>
    </div>
  </MainViewWrapper>
);

export default MainView;
