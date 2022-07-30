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
          
            {ContactsModal.filter((val) => {
              if (searchEmail === "") {
                  return val
              } else if (val.email.toLowerCase().includes(searchEmail.toLowerCase())) {
                  return val;
              }
          }).map((val, key) => {
              return (
                  <div className='data' key={key}>
                      <p>{val.email}</p>
                  </div>
              )
          })}
          
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
