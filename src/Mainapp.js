import react from 'react';
import App from './App';
import App1 from './App1';
import { Switch, Route } from 'react-router';
import Menu from './Menu';
import Appmain from './Appmain';

const Mainapp = () =>{

    return(
        <>
        <Menu/>
        <Switch>
        <Route exact path = "/app2" component={Appmain}/>
<Route  exact path= "/" component = {App}/>
<Route exact path = "/app1" component={App1}/>
</Switch>
  </>
    );
    }
    export default Mainapp;