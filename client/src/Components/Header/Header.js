import "./Header.css"
import React, { useState } from 'react'
import Userimg from '../Header/image/unsplash_WNoLnJo7tS8.jpg'
// import ContactsModal from 

export default function Header() {
  const [searchEmail, setEmail] = useState("")
  return (
    <div className="container">
      
      <header className="header-container">
        <div className="header">
         <h2 className="total-contacts">
            Total Contacts
         </h2>
          <div className="searchbar">
          <input type="text" placeholder="Search by Email Id...." onChange={(e) => { setEmail(e.target.value) }}/>
  
          </div>
          <div className="user-details">
           <img className="userimg" src={Userimg} alt="userimage"></img>
           <div className="user-name">
            <span id="user-name">Ram Darvin</span>
               <span>Super Admin</span>
           </div>
          </div>
        </div>
      </header>
      <hr/>
    </div>
  )
}
