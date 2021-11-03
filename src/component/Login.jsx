import '../assets/css/login.css'
import ImgLogin from '../image/login.svg'
import { useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'

export const Login = () => {
    const [token, setToken] = useState('')
    const history = useHistory()

    useEffect(() => {
        authUser()
    }, [])

    const loginUser = (e) => {
        e.preventDefault()
        let inputUserEmail = document.querySelector('#inputUsernameEmail')
        let inputPassword = document.querySelector('#inputPassword')

        if(inputUserEmail.value === 'donero' && inputPassword.value === 'ewedon'){
            console.log(token)
            if(token !== ""){
                localStorage.setItem('loginUser', token)
                history.push('/')
                history.go(0)
            }else{
                alert("Gagal Login")
            }
        }else{
            alert('Sorry Username or Password Unknown')
            inputUserEmail.value = ''
            inputPassword.value = ''
            inputUserEmail.focus()
        }
    }

    const authUser = () => {
        fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                username: "donero",
                password: "ewedon"
            })
        })
        .then(res=>res.json())
        .then(json=> setToken(json.token))
    }

    const backHome = () => {
        history.push('/')
        history.go(0)
    }
    return(
        <div className="container space-container-login">
            <div className="row align-items-center">
            <div className="col-lg-6">
                <img src={ImgLogin} onClick={backHome} alt="Logo Login" className="bg-login" />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="card-login">
                <h2 className="h2 text-center text-gray-900 mb-5 fw-bold">Log In</h2>
                <form className="user">
                    <div className="form-group py-3">
                        <input type="text" className="form-control form-control-user" id="inputUsernameEmail" aria-describedby="emailHelp" placeholder="Email Address/Username" />
                    </div>
                    <div className="form-group py-3">
                        <input type="password" className="form-control form-control-user" id="inputPassword" placeholder="Password" />
                    </div>
                    <div className="py-3">
                        <button className="btn btn-login" onClick={loginUser}>
                            Login
                        </button>
                    </div>
                </form>
                <div className="text-center mt-4">
                    <span className="small">Forget an account? </span>
                    <label className="link-primary font-weight-bold small">Contact Admin</label>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}