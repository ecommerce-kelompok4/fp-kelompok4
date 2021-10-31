import '../assets/css/Navbar.css'
import Logo from '../image/login.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart  } from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {
    return(
        <nav className="navbar fixed-top navbar-expand-md navbar-light bg-white">
            <div className="container-fluid">
                <a className="navbar-brand" href="#!">
                    <img src={Logo} width="40" height="40" alt=""/>
                    <span className="brand-logo"> Toko Jaya </span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="form-inline my-2 my-lg-0 d-inline w-100"></form>
                    
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown no-arrow mr-3 mt-2 mb-2">
                            <a href="#!" className="btn btn-cart" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <FontAwesomeIcon icon={faShoppingCart} />
                                {/* <span className="badge badge-danger badge-counter text-badge fw-bold">5</span> */}
                            </a>
                        </li>
                        <li className="nav-item mr-3 mt-3 mb-2 px-2">
                            |
                        </li>
                        <li className="nav-item mr-3 mt-2 mb-2 px-2">
                            <a href="!" className="btn btn-login">Login</a>
                        </li>
                        {/* <li className="nav-item mr-3 mt-2 mb-2 px-2">
                            <a href="!" className="btn btn-danger">Logout</a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}