import React from 'react'
// import { Link } from 'react-router-dom'
// import TopUsersTable from './TopUsersTable'
// import LastOrdersTable from './LastOrdersTable'
import UserDropDown from '../../component/Dropdown/UserDropDown'
import '../../component/TopNav/topnav.css'
import { useState, useEffect } from 'react'

export default function Dashboard() {
  const [checkout, setCheckout] = useState([])

  useEffect(() => {
    loadListCheckout()
    console.log(checkout)
  }, [])

  const loadListCheckout = () => {
    let data = JSON.parse(localStorage.getItem("checkout"))
    setCheckout(data)
  }

  return (
    <>
    <div className='topnav'>
      <div className='topnav-right'>
        <div className='topnav-right-item'>
          <UserDropDown />
        </div>
      </div>
    </div>

    <div>
      <h2 className='page-header'>Rekap Penjualan</h2>

      <div className='row'>
        <div className='col-12'>
          <div className='card'>
            <div className='card-header'>
              <h3>Rekap Penjualan</h3>
            </div>
            <div className='card-body'>
              {/* <LastOrdersTable /> */}
              
              <div className="table-wrapper">
                <table>
                  {/* <thead>
                  </thead> */}
                  <tbody>
                      {
                        checkout.map((item, i) => {
                          <>
                          <tr key={i}>
                            <td>{item.timestamp}</td>
                            <td>{item.email}</td>
                            <td>{item.name}</td>
                            <td>{item.products}</td>
                            <td>{item.telp}</td>
                          </tr>
                          </>
                        })
                      }              
                  </tbody>
                </table>
              </div>
            </div>

            {/* <div className='card-footer'>
              <Link to='/'>lihat semua</Link>
            </div> */}

          </div>
        </div>
      </div>
    </div>
    </>
  )
}
