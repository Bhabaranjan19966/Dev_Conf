import React , { Fragment}from "react";
import {BrowserRouter , Route,Switch } from  "react-router-dom";
import Login from '../components/Login'
import Home from "../components/Home";
import Graphs from '../components/graphs';

class AppRouter extends React.Component {

    render() {
        return(
            <Fragment>
                <BrowserRouter>
                <Switch>
                    <Route path = "/" component= {Login} exact={true}/>
                    <Route path = "/home" component = {Home}  />
                    <Route path = "/graphs" component = {Graphs}/>
                </Switch>
                </BrowserRouter>
            </Fragment>
        )
    }
}
export default AppRouter;
