import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddExpenses from './AddExpenses';
import DashBoard from './DashBoard';


function Router() {
  return (
      <BrowserRouter>
          <Switch>
              <Route component={AddExpenses} path="/"  exact={true}  />
              <Route component={DashBoard}  path="/dashboard"  />
          </Switch>
      </BrowserRouter>
  )
}
export default Router;