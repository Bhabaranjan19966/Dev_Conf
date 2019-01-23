import React , { Fragment}from "react";
import {BrowserRouter , Route,Switch } from  "react-router-dom";
import Login from '../components/Login'
import Graph from "../components/Graph";
class AppRouter extends React.Component {

    render() {
        return(
            <Fragment>
                <BrowserRouter>
                <Switch>
                    <Route path = "/" component= {Login} exact={true}/>
                    <Route path = "/home" component = {Graph}  />
                </Switch>
                </BrowserRouter>
            </Fragment>
        )
    }
}
export default AppRouter;
