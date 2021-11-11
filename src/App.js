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

function App() {
  
  useEffect(() => {
    document.title = `Toko Jaya`
  })

  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <div className="App">
          <Navbar />
            <Route path="/product/:productId" exact component={DetailProduct} />
            <Route path="/" exact component={Home} />
            {/* <Route>404 Not Found!</Route> */}
          <Footer />
        </div>
      </Switch>
    </Router>
  );
}

export default App;