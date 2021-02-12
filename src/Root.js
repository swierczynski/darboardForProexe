import React from 'react';
import MainTemplate from './templates/MainTemplate';
import {Switch, Redirect, Route} from 'react-router-dom'
import {routes} from './routes'
import UserView from './views/UserView/UserView';

const Root = () => {
  return ( 
    <MainTemplate>
      <div>
        <h1>Dashboard</h1>
      </div>
      <Switch>
        <Route exact path={routes.home} component={() => <Redirect to={routes.users} />} />
        <Route exact path={routes.users} component={UserView} />
      </Switch>
    </MainTemplate>
   );
}
 
export default Root;