import React from 'react'
// import { Link } from 'react-router-dom'
import '@fortawesome/react-fontawesome'
import UserDropDown from '../Dropdown/UserDropDown'
import './topnav.css'

export default function index() {
  return (
    <div className='topnav'>
      <div className='topnav-search'>
        <input type='text' placeholder='Search here...' />
        <i className='fas fa-search'></i>
      </div>

      <div className='topnav-right'>
        <div className='topnav-right-item'>
          <UserDropDown />
        </div>
        {/* <div className="topnav-right-item">
          <Link to='/login'>
            <i className="fas fa-sign-out-alt"></i>
          </Link>
        </div> */}
      </div>
    </div>
  )
}
