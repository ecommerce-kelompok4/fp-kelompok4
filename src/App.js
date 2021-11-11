import './App.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Routes from './Routes'
import Sidebar from './component/sidebar/Sidebar'
import TopNav from './component/TopNav'
import Login from './pages/Login'

function App() {

  return (
    <Router>
      <Switch>
        <Route path='/login' exact component={Login} />
        {/* <Route path='/' exact component={Sidebar} /> */}
        <Route
          render={(props) => (
            <div className="App">
              <Sidebar {...props} />
              <div className='layout-content'>
                <TopNav />

                <div className='layout-content-main'>
                  <Routes />
                </div>
              </div>
            </div>
          )}
        ></Route>
      </Switch>
    </Router>
  );
}

export default App;