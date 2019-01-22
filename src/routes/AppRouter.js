import React , { Fragment}from "react";
import {BrowserRouter , Route,Switch } from  "react-router-dom";
import Login from '../components/Login'
import Home from "../components/Home";
class AppRouter extends React.Component {

    render() {
        return(
            <Fragment>
                <BrowserRouter>
                <Switch>
                    <Route path = "/" component= {Login} exact={true}/>
                    <Route path = "/home" component = {Home}  />
                </Switch>
                </BrowserRouter>
            </Fragment>
        )
    }
}
export default AppRouter;
