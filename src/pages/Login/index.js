import React from 'react'
import loginBg from '../../assets/images/login_bg.svg'
import './login.css'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function Login() {
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const loginAdmin = () => {
    if(username == 'admin' && password == 'admin'){
      setTimeout(() => {
        history.push('/dashboard')
      }, 1000)
    }else{
      alert("Username and Password incorect!!")
    }
  }

  return (
    <div>
      <div className='row'>
        <div className='col-6'>
          <div className='login-container'>
            <div className='login-group'>
              <h4 className='form-title'>Login</h4>

              <p className='form-description'>
                Admin Page
              </p>
              <div className='form-group'>
                <div className='input-group'>
                  <label htmlFor='username'>Email</label>
                  <input
                    onChange={handleUsername}
                    placeholder='example@example.com'
                    type='text'
                    id='username'
                    name='username'
                  />
                </div>

                <div className='input-group'>
                  <label htmlFor='password'>Password</label>
                  <input
                    onChange={handlePassword}
                    placeholder='Place your password here'
                    type='password'
                    id='password'
                    name='password'
                  />
                </div>
                <div className='submit-container'>
                  <button onClick={loginAdmin} className='submit'>
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-6'>
          <div className='login-container'>
            <img src={loginBg} alt='login' />
          </div>
        </div>
      </div>
    </div>
  )
}
