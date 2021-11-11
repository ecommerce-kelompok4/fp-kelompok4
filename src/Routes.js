import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
// import Users from './pages/Users'
import Orders from './pages/Orders'
// import Login from './pages/Login'

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/dashboard' component={Dashboard} />
      <Route exact path='/dashboard/orders' component={Orders} />
      {/* <Route exact path='/users' component={Users} /> */}
      {/* <Route exact path='/login' component={Login} /> */}
    </Switch>
  )
}
