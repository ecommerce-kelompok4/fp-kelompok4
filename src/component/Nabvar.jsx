import '../assets/css/Navbar.css'
import Logo from '../image/login.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart  } from '@fortawesome/free-solid-svg-icons'
import { useHistory, Link } from 'react-router-dom'

export const Navbar = () => {
    const history = useHistory()

    const logout = () => {
        localStorage.removeItem('loginUser')
        history.push('/')
        history.go(0)
    }

    return(
        <nav className="navbar fixed-top navbar-expand-md navbar-light bg-white">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={Logo} width="40" height="40" alt=""/>
                    <span className="brand-logo"> Toko Jaya </span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="form-inline my-2 my-lg-0 d-inline w-100"></form>
                    
                    <ul className="navbar-nav ml-auto">
                        {
                            !localStorage.getItem('loginUser') ?
                            <li className="nav-item mr-3 mt-2 mb-2 px-2">
                                <Link to="/login" className="btn btn-login">Login</Link>
                            </li> :
                            <>
                                <li className="nav-item dropdown no-arrow mr-3 mt-2 mb-2">
                                    <Link to="/cart" className="btn btn-cart" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <FontAwesomeIcon icon={faShoppingCart} />
                                        {/* <span className="badge badge-danger badge-counter text-badge fw-bold">5</span> */}
                                    </Link>
                                </li>
                                <li className="nav-item mr-3 mt-3 mb-2 px-2">
                                    |
                                </li>
                                <li className="nav-item mr-3 mt-2 mb-2 px-2">
                                    <button onClick={logout} className="btn btn-danger">Logout</button>
                                </li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}