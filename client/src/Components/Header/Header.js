import "./Header.css";
import React, { useState } from "react";
import Userimg from "../Header/image/unsplash_WNoLnJo7tS8.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Header({ isImport, isDelete, handlesearch }) {
  const [searchEmail, setSearchEmail] = useState([]);
  const [query, setQuery] = useState("");
  const authToken = localStorage.getItem("authorization");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const getData = () => {
    axios
      .get(`http://localhost:3001/contacts/search?email=${query}`, {
        headers: { authorization: authToken },
      })
      .then((data) => {
        setSearchEmail(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
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

  const handleEmail = ({ contact }) => {
    setEmail(contact.email);
    handlesearch([contact]);
    setSuccess(true);
    navigate("/search");
  };

  return (
    <>
      <header className="header-container">
        <div
          className={
            isImport.length > 0 || isDelete.length > 0 ? "headerhome" : "header"
          }
        >
          <h2 className="total-contacts">Total Contacts</h2>
          <div className="searchbar">
            <input
              type="text"
              placeholder="Search by Email Id...."
              onKeyUp={searchFunction}
              onChange={(e) => setQuery(e.target.value)}
              className={
                isImport.length > 0 || isDelete.length > 0
                  ? "headerhome"
                  : "search"
              }
            />
          </div>
          <div className={success ? "searchdisplay" : "searchedEmail"}>
            {searchEmail &&
              searchEmail.map((contact) => {
                return (
                  <span
                    className="search span"
                    onClick={() => handleEmail({ contact })}
                  >
                    {contact.email}
                  </span>
                );
              })}
          </div>
          <div className="user-details">
            <img
              className={
                isImport.length > 0 || isDelete.length > 0
                  ? "headerhome"
                  : "userimg"
              }
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
    </>
  );
}
