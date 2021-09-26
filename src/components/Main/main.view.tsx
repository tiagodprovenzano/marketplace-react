import React from "react";
import { ContentContainer } from "../ContentContainer";
import { SideMenu } from "../SideMenu";
import MainViewWrapper from "./main.styled";
import { Switch, Route } from "react-router-dom";
import { Login } from "../../screens/Login";
import MainLoader from "../MainLoader";
import { Stores } from "../../screens/Stores";

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

                (
                  <ContentContainer>
                    <MainLoader />
                  </ContentContainer>
                ) : 
            (
                <>
                    <SideMenu />
                    <Route path={"/content"}>
                        <ContentContainer />
                    </Route>
                    <Route path={"/stores"}>
                        <ContentContainer>
                          <Stores />
                        </ContentContainer>
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
