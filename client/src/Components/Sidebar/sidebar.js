import React from 'react'
import './sidebar.css'
import Dashboardicon from '../Sidebar/images/Vector (2).png'
import TotalContacts from '../Sidebar/images/Vector (3).png'
import LogoutIcon from '../Sidebar/images/Vector (4).png'

export default function sidebar() {
  return (
    <div className='container'>
      <div className="sidebar">
        <p className="logo">Logo</p>
      
        <div>
            <span><img className="dashboard-icon" src={Dashboardicon} alt="dashboardicon"/></span>
            <span className="dashboard">Dashboard</span>
        </div>
        <button className='button'>
            <img id='contacts-icon' src={TotalContacts} alt='Total-contacts-img'></img>
            <p id='total-contacts'>Total Contacts</p>
        </button>
        <img className='logout-icon' src={LogoutIcon} alt='logot-icon'></img>
        <p className='logout-option'>Logout</p>
      </div>
    </div>
  )
}
