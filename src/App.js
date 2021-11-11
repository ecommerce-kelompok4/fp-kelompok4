import './App.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { Navbar } from './component/Nabvar'
import { Footer } from './component/Footer'
import { Login } from './component/Login'
import { Home } from './component/Home'
import { DetailProduct } from './component/DetailProduct'
import { Cart } from './component/Cart'
import { Checkout } from './component/Checkout'
import LoginAdmin from './pages/Login'
import Dashboard from './pages/Orders'
// import Orders from './pages/Orders'
// import Routes from './Routes'
import Sidebar from './component/sidebar/Sidebar'
import TopNav from './component/TopNav'


function App() {
  
  useEffect(() => {
    document.title = `Toko Jaya`
  })

  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/login-admin" component={LoginAdmin} />
        <Route exact path='/dashboard' component={Dashboard} />
        <div className="App">
          <Navbar />
            <Route path="/product/:productId" exact component={DetailProduct} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/checkout" exact component={Checkout} />
            <Route path="/" exact component={Home} />
          <Footer />
        </div>
        <div>
            {/* <Sidebar /> */}
            <div className="layout-content">
              <TopNav />
              <div className="layout-content-main">
                <Route exact path='/dashboard' component={Dashboard} />
                {/* <Route exact path='/dashboard/orders' component={Orders} /> */}
              </div>
            </div>
          </div>
      </Switch>
    </Router>
  );
}

export default App;