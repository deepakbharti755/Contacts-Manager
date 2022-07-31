import { useEffect, useState } from "react";
import "./Contact_List.css";
import datelogo from "../../Images/date.png";
import vectorlogo from "../../Images/Vector.png";
import deletelogo from "../../Images/delete.png";
import importlogo from "../../Images/import.png";
import exportlogo from "../../Images/export.png";
import downarrow from "../../Images/downarrow.png";
import linelogo from "../../Images/line.png";
import updownlogo from "../../Images/updown.png";
import editlogo from "../../Images/edit.png";
import binlogo from "../../Images/bin.png";
import axios from "axios";
import ImportFile from "../ImportFile/ImportFile";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/sidebar";

const ContactList = () => {
  const authToken = localStorage.getItem("authorization");
  const [isImport, setIsImport] = useState("");
  const [contactList, setContactList] = useState([]);
  const importfunct = (val) => {
    setIsImport("");
  };
  useEffect(() => {
    axios
      .get("http://localhost:3001/contacts", {
        headers: { authorization: authToken },
      })
      .then((contacts) => {
        setContactList(contacts.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="home">
      <Header />
      <Sidebar />
      <div className="main-container">
        <div className="header">
          <div className="button first">
            <img src={datelogo} alt="" />
            <span>Select Date</span>
            <img src={downarrow} alt="" />
          </div>
          <div className="button second">
            <img src={vectorlogo} alt="" />
            <span>Filters</span>
            <img src={linelogo} alt="" />
            <img src={downarrow} alt="" />
          </div>
          <div className="button third">
            <img src={deletelogo} alt="" />
            <span>Delete</span>
          </div>
          <div className="button third">
            <img src={importlogo} alt="" />
            <span onClick={() => setIsImport("import")}>Import</span>
          </div>
          <div className="button third">
            <img src={exportlogo} alt="" />
            <span>Export</span>
          </div>
        </div>
        <div className="contacts">
          <input type="checkbox" id="checkbox" />
          <div className="Name">
            <h3>Name</h3>
          </div>
          <div className="Designation">
            <img src={linelogo} alt="" className="line" />
            <h3>Designation</h3>
            <img src={updownlogo} alt="" className="arrows" />
          </div>
          <div className="Company">
            <img src={linelogo} alt="" className="line" />
            <h3>Company</h3>
            <img src={updownlogo} alt="" className="arrows" />
          </div>
          <div className="Industry">
            <img src={linelogo} alt="" className="line" />
            <h3>Industry</h3>
            <img src={updownlogo} alt="" className="arrows" />
          </div>
          <div className="Email">
            <img src={linelogo} alt="" className="line" />
            <h3>Email</h3>
          </div>
          <div className="Phone">
            <img src={linelogo} alt="" className="line" />
            <h3>Phone number</h3>
          </div>
          <div className="Country">
            <img src={linelogo} alt="" className="line" />
            <h3>Country</h3>
          </div>
          <div className="Action">
            <img src={linelogo} alt="" className="line" />
            <h3>Action</h3>
          </div>
        </div>
        {contactList &&
          contactList.map((contact) => {
            return (
              <div className="contacts">
                <input type="checkbox" id="checkbox" />
                <div className="Name">
                  <h4>{contact.name}</h4>
                </div>
                <div className="Designation">
                  <h4>{contact.designation}</h4>
                </div>
                <div className="Company">
                  <h4>{contact.company}</h4>
                </div>
                <div className="Industry">
                  <h4>{contact.industry}</h4>
                </div>
                <div className="Email">
                  <h4>{contact.email}</h4>
                </div>
                <div className="Phone">
                  <h4>{contact.phoneNumber}</h4>
                </div>
                <div className="Country">
                  <h4>{contact.country}</h4>
                </div>
                <div className="Action">
                  <img src={editlogo} alt="" />
                  <img src={binlogo} alt="" />
                </div>
              </div>
            );
          })}
        {isImport.length > 0 && <ImportFile importfunct={importfunct} />}
      </div>
    </div>
  );
};

export default ContactList;
