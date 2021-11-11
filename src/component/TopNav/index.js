import React from 'react'
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
      </div>
    </div>
  )
}
