import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Tasks from './components/Tasks/Tasks';
import {connect} from "react-redux"
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom"
import { NonAuth } from './components/NonAuth/NonAuth';

function App(props) {

  const nonAuth = (<React.Fragment><NavBar/><NonAuth/></React.Fragment>)
  const tasks = (<React.Fragment><NavBar/><Tasks/></React.Fragment>)

  return (
    <BrowserRouter>
            <Switch>
                <Route path={'/:id'}>
                    {props.isAuthenticate
                        ? tasks
                        : nonAuth
                    }
                </Route>
                {props.fId[0] !== undefined && props.isAuthenticate === true 
                  ? <Redirect to={"/"+props.fId[0].id}/> 
                  : <Route path={'/'} exact>{nonAuth}</Route>}
            </Switch>
    </BrowserRouter>
  );
}
function mapStateToProps(state){
    return {
        isAuthenticate : state.isAuthenticate,
        fId : state.folders
    }
}

export default connect(mapStateToProps)(App);
