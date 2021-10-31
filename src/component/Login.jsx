import '../assets/css/login.css'
import ImgLogin from '../image/login.svg'

export const Login = () => {
    return(
        <div className="container space-container-login">
            <div className="row align-items-center">
            <div className="col-lg-6">
                <a href="#!">
                    <img src={ImgLogin} alt="" className="bg-login" />
                </a>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="card-login">
                <h2 className="h2 text-center text-gray-900 mb-5 fw-bold">Log In</h2>
                <form className="user">
                    <div className="form-group py-3">
                        <input type="email" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Email Address/Username" />
                    </div>
                    <div className="form-group py-3">
                        <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Password" />
                    </div>
                    <div className="py-3">
                        <button className="btn btn-login btn-user">
                            Login
                        </button>
                    </div>
                </form>
                <div className="text-center mt-4">
                    <span className="small">Don't have an account? </span>
                    <label className="link-primary font-weight-bold small">Contact Admin</label>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}