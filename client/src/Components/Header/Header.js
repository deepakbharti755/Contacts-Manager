<<<<<<< HEAD
import "./Header.css";
import React, { useState } from "react";
import Userimg from "../Header/image/unsplash_WNoLnJo7tS8.jpg";
// import ContactsModal from

export default function Header() {
  const [searchEmail, setEmail] = useState("");
=======
import "./Header.css"
import React, { useEffect, useState } from 'react'
import Userimg from '../Header/image/unsplash_WNoLnJo7tS8.jpg'
// import ContactsModal from 

export default function Header() {
  
  // const [searchEmail, setEmail] = useState("")
  // useEffect(() => {
    let counter=0;
  const getData=()=>{
    console.log("Fetching Data...", counter++)
  }
  const debounce=function(fn,d){
    let timer;
    return function(){
      let context=this,
      args=arguments;
      clearTimeout(timer);
      timer=setTimeout(() => {
        fn.apply(context,args);
      }, d);
    }
  }
  const searchFunction=debounce(getData, 300)
  // }, []);
  

>>>>>>> 497ff8921a15a11a1462f42d8c4f98e1a895e117
  return (
    <div className="container">
      <header className="header-container">
        <div className="header">
          <h2 className="total-contacts">Total Contacts</h2>
          <div className="searchbar">
<<<<<<< HEAD
            <input
              type="text"
              className="search"
              placeholder="Search by Email Id...."
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
=======
          <input type="text" placeholder="Search by Email Id...." onKeyUp={searchFunction}/>
          
            
            
          
>>>>>>> 497ff8921a15a11a1462f42d8c4f98e1a895e117
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
      <hr />
    </div>
<<<<<<< HEAD
  );
=======
  )
        
>>>>>>> 497ff8921a15a11a1462f42d8c4f98e1a895e117
}
