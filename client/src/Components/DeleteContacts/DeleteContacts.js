import { useRef, useState, useEffect } from "react";
import "./DeleteContacts.css";
import deletelogo from "../../Images/Group 1130.png";
import importlogo from "../../Images/Group.png";
import axios from "axios";

const DeleteContacts = ({ contactdelete, deletefunct }) => {
  const authToken = localStorage.getItem("authorization");
  const [deleteContacts, setDeleteContacts] = useState([]);
  const componentRef = useRef();
  useEffect(() => {
    axios({
      url: "http://localhost:3001/contacts/selected",
      method: "DELETE",
      headers: { authorization: authToken },
      data: { email: contactdelete },
    });
  }, []);
  useEffect(() => {
    const refreshPage = () => {
      window.location.reload(false);
      deletefunct("");
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
    function handleClick(e) {
      if (componentRef && componentRef.current) {
        const ref = componentRef.current;
        if (!ref.contains(e.target)) {
          refreshPage();
        }
      }
    }
  }, []);
  return (
    <div className="deletecontact">
      {deleteContacts.length === 0 && (
        <div className="deletefile">
          <img src={deletelogo} alt="" />
          <span className="inst">Delete Contacts</span>
          <span className="alert">Sure you want to delete this Contacts</span>
          <div className="footerbutton">
            <button className="deletebutton" onClick={() => deletefunct("")}>
              Cancel
            </button>
            <button className="okbutton">Ok</button>
          </div>
        </div>
      )}
      {deleteContacts.length > 0 && (
        <div className="deletecomplete" ref={componentRef}>
          <img src={importlogo} alt="" />
          <span className="del">Deleted Contacts</span>
        </div>
      )}
    </div>
  );
};

export default DeleteContacts;
