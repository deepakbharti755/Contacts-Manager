import "./Header.css";
import React, { useEffect, useState } from "react";
import Userimg from "../Header/image/unsplash_WNoLnJo7tS8.jpg";
// import ContactsModal from

export default function Header({ isImport }) {
  // const [searchEmail, setEmail] = useState("")
  // useEffect(() => {
  let counter = 0;
  const getData = () => {
    console.log("Fetching Data...", counter++);
  };
  const debounce = function (fn, d) {
    let timer;
    return function () {
      let context = this,
        args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, d);
    };
  };
  const searchFunction = debounce(getData, 300);
  // }, []);

  return (
    <div className="container">
      <header className="header-container">
        <div className={isImport.length > 0 ? "headerhome" : "header"}>
          <h2 className="total-contacts">Total Contacts</h2>
          <div className="searchbar">
            <input
              type="text"
              placeholder="Search by Email Id...."
              onKeyUp={searchFunction}
              className={isImport.length > 0 ? "headerhome" : undefined}
            />
          </div>
          <div className="user-details">
            <img
              className={isImport.length > 0 ? "headerhome" : "userimg"}
              src={Userimg}
              alt="userimage"
            ></img>
            <div className="user-name">
              <span id="user-name">Ram Darvin</span>
              <span>Super Admin</span>
            </div>
          </div>
        </div>
      </header>
      <hr />
    </div>
  );
}
